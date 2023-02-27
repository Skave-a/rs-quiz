import {
  Grid,
  Container,
  Typography,
  CardActionArea,
  Card,
  Box,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  CardMedia,
  Button,
  Link,
} from '@mui/material';
import { Settings } from '@mui/icons-material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styles from './Profile.module.css';
import PhotoIcon from '@mui/icons-material/Photo';
import ProfileInput from './ProfileInput';
import Slider from './Slider';
import { dataProfile } from '../utils/constants';
import { Link as RouterLink } from 'react-router-dom';
import { useState, MouseEvent, ChangeEvent, useRef } from 'react';
import { useAppSelector } from '../../store/hooks';
import { useTranslation } from 'react-i18next';

export default function Profile() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const darkMode = useAppSelector((state) => state.darkMode.darkMode);
  const { t } = useTranslation();
  const [image, setImage] = useState<File | undefined>();
  const [imageURL, setImageURL] = useState<string | ArrayBuffer | null | undefined>(
    'https://source.unsplash.com/random'
  );
  const filePick = useRef(null);
  const fileReader = new FileReader();
  fileReader.onloadend = () => {
    setImageURL(fileReader.result);
  };
  localStorage.setItem('imageURL', JSON.stringify(imageURL));
  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      setImage(file);
      fileReader.readAsDataURL(file);
    }
  };
  // const handleClick = (event: MouseEvent<HTMLElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <>
      <Container maxWidth="xl">
        <Typography
          variant="h4"
          sx={{ mb: 5, color: darkMode ? '#ffffff' : '#292626' }}
          className={styles.title}
        >
          {t('Hi, Welcome back')}
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ maxWidth: 345, mb: 2 }}>
              <label htmlFor="file-loader-button" className={styles.labelUp}>
                <ListItemIcon>
                  <PhotoIcon fontSize="small" />
                </ListItemIcon>

                {t('change photos')}
              </label>
              <input
                id="file-loader-button"
                type="file"
                ref={filePick}
                className={styles.input__load}
                onChange={handleOnChange}
              />
              <CardActionArea>
                <Box className={styles.profile__header}>
                  <CardMedia component="img" height="194" image={`${imageURL}`} alt="avatar" />
                </Box>
              </CardActionArea>
            </Card>
            <Link component={RouterLink} to="/create-quiz" underline="none">
              <Button variant="contained" sx={{ color: '#fff', letterSpacing: '.1em' }}>
                {t('Create new quiz')}
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} md={6} lg={8} sx={{ mb: 5 }}>
            <ProfileInput rows={dataProfile} />
            <Typography
              sx={{
                mb: 5,
                fontSize: '1.6rem',
                fontFamily: '"Poppins", sans-serif',
                color: darkMode ? '#ffffff' : '#292626',
              }}
              className={styles.title}
            >
              {t('myQuizzes')}
            </Typography>
            <Slider />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

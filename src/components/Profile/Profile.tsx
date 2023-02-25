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
import { useState, MouseEvent } from 'react';
import { useAppSelector } from '../../store/hooks';
import { useTranslation } from 'react-i18next';

export default function Profile() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const darkMode = useAppSelector((state) => state.darkMode.darkMode);
  const { t } = useTranslation();

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
              <IconButton
                onClick={handleClick}
                className={styles.profile__header_tool}
                size="small"
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <MoreVertIcon />
              </IconButton>
              <CardActionArea>
                <Box className={styles.profile__header}>
                  <CardMedia
                    component="img"
                    height="194"
                    image="https://source.unsplash.com/random"
                    alt="avatar"
                  />
                </Box>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleClose}
                  onClick={handleClose}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: 'visible',
                      filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                      mt: 1.5,
                      '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      '&:before': {
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: 'background.paper',
                        transform: 'translateY(-50%) rotate(45deg)',
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <PhotoIcon fontSize="small" />
                    </ListItemIcon>

                    {t('Add another photo')}
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>

                    {t('Delete photo')}
                  </MenuItem>
                </Menu>
                {/* <CardContent>
                  <Typography gutterBottom variant="h5" component="div"></Typography>
                </CardContent> */}
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

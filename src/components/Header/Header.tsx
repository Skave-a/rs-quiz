import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import { useState, MouseEvent } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../../components/assets/logoq.png';
import { switchMode } from '../../store/reducers/darkSlice';
import SwitchMode from '../SwitchMode/SwitchMode';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
// import { logout } from '../../store/reducers/userSlice';
import styles from './Header.module.css';
import { SelectLang } from './SelectLang/SelectLang';
import { useTranslation } from 'react-i18next';
import { ModalQuit } from '../ModalQuit/ModalQuit';

export const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const darkMode = useAppSelector((state) => state.darkMode.darkMode);
  const dispatchDark = useDispatch();
  const isAuth = useAppSelector((state) => state.users.isAuth);
  // const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleModeChange = () => dispatchDark(switchMode());
  // const handleLogOut = () => {
  //   dispatch(logout());
  // };
  // const handleSubmit = () => {
  //   handleOpen();
  // };
  return (
    <AppBar
      position="static"
      sx={{
        position: 'relative',
        boxShadow: 'none',
        backgroundColor: darkMode ? '#323a4b' : '#ffffff',
      }}
      className={darkMode ? styles.headerDark : styles.header}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <RouterLink style={{ textDecoration: 'none' }} to="/">
            <Box component="img" src={logo} alt="logo" className={styles.logo} />
          </RouterLink>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none', color: 'black' },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  component={RouterLink}
                  style={{ textDecoration: 'none', color: 'black' }}
                  to="/"
                  textAlign="center"
                >
                  {t('QuestionsList')}
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  style={{ textDecoration: 'none', color: 'black' }}
                  component={RouterLink}
                  to="/create-quiz"
                  textAlign="center"
                >
                  {t('Create new quiz')}
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  style={{ textDecoration: 'none', color: 'black' }}
                  component={RouterLink}
                  to="/profile"
                  textAlign="center"
                >
                  {t('Profile')}
                </Typography>
              </MenuItem>
            </Menu>
            {/* <RouterLink style={{ textDecoration: 'none' }} to="/" className={styles.logo__sm_box}>
              <Box component="img" src={logo} alt="logo" className={styles.logo__sm} />
            </RouterLink> */}
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              component={RouterLink}
              to="/"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: darkMode ? '' : '#292626', display: 'block' }}
            >
              {t('QuestionsList')}
            </Button>
            <Button
              component={RouterLink}
              to="/create-quiz"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: darkMode ? '' : '#292626', display: 'block' }}
            >
              {t('Create new quiz')}
            </Button>
            <Button
              component={RouterLink}
              to="/profile"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: darkMode ? '' : '#292626', display: 'block' }}
            >
              {t('ProfileU')}
            </Button>
          </Box>
          <Box className={styles.settings}>
            <SelectLang />
            <SwitchMode handleModeChange={handleModeChange} />
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            {isAuth ? (
              <Button
                component={RouterLink}
                to="/"
                onClick={handleOpen}
                sx={{ my: 2, color: darkMode ? '#ffffff' : '#292626', display: 'block' }}
              >
                {t('LOG OUT')}
              </Button>
            ) : (
              <Button
                component={RouterLink}
                to="/authorization"
                sx={{ my: 2, color: darkMode ? '#ffffff' : '#292626', display: 'block' }}
              >
                {t('LOG IN')}
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
      <ModalQuit open={open} handleClose={handleClose} />
    </AppBar>
  );
};

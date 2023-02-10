import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Switch,
  Toolbar,
  Typography,
} from '@mui/material';
import { useState, MouseEvent } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { Link as RouterLink } from 'react-router-dom';
import logo from '../../components/assets/logoq.png';
import { useAppSelector } from '../../store/hooks';
import { switchMode } from '../../store/reducers/darkSlice';
import SwitchMode from '../SwitchMode/SwitchMode';
import styles from './Header.module.css';

export const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const darkMode = useAppSelector((state) => state.darkMode.darkMode);
  const dispatch = useDispatch();

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleModeChange = () => {
    dispatch(switchMode());
  };

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
                  Questions list
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  style={{ textDecoration: 'none', color: 'black' }}
                  component={RouterLink}
                  to="/create-quiz"
                  textAlign="center"
                >
                  Create new quiz
                </Typography>
              </MenuItem>
            </Menu>
            <RouterLink style={{ textDecoration: 'none' }} to="/" className={styles.logo__sm_box}>
              <Box component="img" src={logo} alt="logo" className={styles.logo__sm} />
            </RouterLink>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              component={RouterLink}
              to="/"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: darkMode ? '' : '#292626', display: 'block' }}
            >
              Questions list
            </Button>
            <Button
              component={RouterLink}
              to="/create-quiz"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: darkMode ? '' : '#292626', display: 'block' }}
            >
              Create new quiz
            </Button>
          </Box>
          {/* <Switch
            // checked={toggleDark}
            onChange={handleModeChange}
            // name="toggleDark"
            color="default"
          /> */}
          <SwitchMode handleModeChange={handleModeChange} />
          <Box sx={{ flexGrow: 0 }}>
            <Typography
              style={{ textDecoration: 'none', color: darkMode ? '#19d2f1' : 'black' }}
              component={RouterLink}
              to="/authorization"
              textAlign="center"
            >
              LOG IN
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

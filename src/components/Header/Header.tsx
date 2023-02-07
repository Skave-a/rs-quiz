import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link as RouterLink } from 'react-router-dom';
import { settings } from '../../components/utils/constants';
import { useState } from 'react';
import logo from '../../components/assets/logoq.png';
import styles from './Header.module.css';

export const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ position: 'relative', boxShadow: 'none', backgroundColor: '#ffffff' }}
      className={styles.header}
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
              sx={{ my: 2, color: '#292626', display: 'block' }}
            >
              Questions list
            </Button>
            <Button
              component={RouterLink}
              to="/create-quiz"
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: '#292626', display: 'block' }}
            >
              Create new quiz
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

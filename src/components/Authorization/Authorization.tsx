import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  createTheme,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  ThemeProvider,
  Paper,
  Typography,
} from '@mui/material';

import { Link as RouterLink } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { useLoginUserMutation } from '../../store/api/AuthApi';
import { useTranslation } from 'react-i18next';
import { FormEvent, useEffect, useState } from 'react';
import AlertGlobal from '../Alert/AlertGlobal';
import { isApiResponse } from '../utils/helpers';

function Copyright() {
  const { t } = useTranslation();
  return (
    <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 5 }}>
      {'Copyright © '}
      <Link color="inherit" variant="body2" component={RouterLink} to="/">
        {t('Quiz-app')}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function Authorization() {
  const darkMode = useAppSelector((state) => state.darkMode.darkMode);
  const [loginUser, { isLoading, isError, error, isSuccess }] = useLoginUserMutation();

  //AlertGlobal control
  const [openErrorAlert, setOpenErrorAlert] = useState(false);
  const [openSuccessAlert, setOpenSuccessAlert] = useState(false);
  const [message, setMessage] = useState('');
  const [severityProp, setSeverityProp] = useState(true);

  useEffect(() => {
    if (isError) {
      setOpenErrorAlert(true);
      setSeverityProp(false);
      if (isApiResponse(error)) {
        setMessage(error.data.message);
      } else {
        console.error(error);
        setMessage('Server error ocurred');
      }
    }
    if (isSuccess) {
      setOpenSuccessAlert(true);
      setSeverityProp(true);
      setMessage('Authorization was successful');
    }
  }, [isError, isSuccess]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const email = data.get('email') as string;
    const password = data.get('password') as string;
    await loginUser({ email, password });
  };
  const { t } = useTranslation();

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: '100vh' }}>
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: 'url(https://source.unsplash.com/random)',
              backgroundRepeat: 'no-repeat',
              backgroundColor: (t) =>
                t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
            sx={{ backgroundColor: darkMode ? '#323a4b' : '' }}
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                {t('Sign in')}
              </Typography>
              <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label={t('Email Address')}
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label={t('Password')}
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label={t('Remember me')}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, color: '#fff' }}
                >
                  {t('Sign in')}
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="#" variant="body2">
                      {t('Forgot password?')}
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link variant="body2" component={RouterLink} to="/registration">
                      {t("Don't have an account? Sign Up")}
                    </Link>
                  </Grid>
                </Grid>
                <Copyright />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
      <AlertGlobal
        severityProp={severityProp}
        onError={{ openErrorAlert, setOpenErrorAlert }}
        onSuccess={{ openSuccessAlert, setOpenSuccessAlert }}
        message={message}
      />
    </>
  );
}

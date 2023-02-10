import { Container } from '@mui/material';
import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { Chat } from './components/Chat/Chat';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';

import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
} from '@mui/material/styles';
import Authorization from './components/Authorization/Authorization';
import { CreateQuiz } from './components/CreateQuiz/CreateQuiz';
import Page404 from './components/Page404/Page404';
import Registration from './components/Registratiion/Registartion';
import { Test } from './components/Test/Test';
import { useAppSelector } from './store/hooks';

function App() {
  const isAuth = useAppSelector((state) => state.users.isAuth);
  const token = useAppSelector((state) => state.users.token);
  console.log(`token, isAuth =>>>>>`, token, isAuth);

  const PrivateRoute = () => {
    return isAuth ? <Outlet /> : <Authorization />;
  };
  const darkMode = useAppSelector((state) => state.darkMode.darkMode);
  const theme = extendTheme({
    colorSchemes: {
      light: {
        palette: {
          primary: {
            main: '#19d2f1',
          },
          mode: darkMode ? 'dark' : 'light',
        },
      },
    },
  });
  document.body.style.background = darkMode ? '#1e222b' : '#eff4fc';
  return (
    <CssVarsProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Container sx={{ width: { sm: 2 / 2 } }}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route element={<PrivateRoute />}>
              <Route
                path="/authorization"
                element={isAuth ? <Navigate to="/" replace /> : <Authorization />}
              />
              <Route
                path="/registration"
                element={isAuth ? <Navigate to="/" replace /> : <Registration />}
              />
              <Route path="/chat" element={<Chat />} />
              <Route path="/create-quiz" element={<CreateQuiz />} />
              <Route path="/test/:id" element={<Test />} />
              <Route path="*" element={<Page404 />} />
            </Route>
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </CssVarsProvider>
  );
}

export default App;

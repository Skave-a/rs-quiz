import { Container } from '@mui/material';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Chat } from './components/Chat/Chat';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';

import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
} from '@mui/material/styles';
import { CreateQuiz } from './components/CreateQuiz/CreateQuiz';
import { Test } from './components/Test/Test';
import Page404 from './components/Page404/Page404';
import Authorization from './components/Authorization/Authorization';
import Registration from './components/Registratiion/Registartion';

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#19d2f1',
        },
      },
    },
  },
});

function App() {
  return (
    <CssVarsProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Container sx={{ width: { sm: 2 / 2 } }}>
          <Routes>
            <Route path="/authorization" element={<Authorization />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/" element={<Main />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/create-quiz" element={<CreateQuiz />} />
            <Route path="/test/:id" element={<Test />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Container>
        <Footer />
      </BrowserRouter>
    </CssVarsProvider>
  );
}

export default App;

import { Container } from '@mui/material';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Chat } from './pages/chat/Chat';
import { Footer } from './pages/Footer/Footer';
import { Header } from './pages/header/Header';
import { Main } from './pages/main/Main';
import { Page404 } from './pages/page404/Page404';
import {
  Experimental_CssVarsProvider as CssVarsProvider,
  experimental_extendTheme as extendTheme,
} from '@mui/material/styles';
import { CreateQuiz } from './pages/CreateQuiz/CreateQuiz';

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
        <Container sx={{ width: { sm: 2 / 3 } }}>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/create-quiz" element={<CreateQuiz />} />
            {/* <Route path="/anyPage" element={< AnyPage/>} /> */}
            <Route path="*" element={<Page404 />} />
          </Routes>
          <Footer />
        </Container>
      </BrowserRouter>
    </CssVarsProvider>
  );
}

export default App;

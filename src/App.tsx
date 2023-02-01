import { Container } from '@mui/material';
import React, { useState } from 'react';
import './App.css';
import { booksApi, useGetBooksQuery } from './store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Chat } from './pages/chat/Chat';
import { Footer } from './pages/footer/Footer';
import { Header } from './pages/header/Header';
import { Main } from './pages/main/Main';
import { Page404 } from './pages/page404/Page404';

function App() {
  // для вывода карточек книг
  const [count, setCount] = useState('');
  const { data = [], isLoading } = useGetBooksQuery(count);
  return (
    <BrowserRouter>
      <Container sx={{ width: { sm: 2 / 3 } }}>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/chat" element={<Chat />} />
          {/* <Route path="/anyPage" element={< AnyPage/>} /> */}
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </Container>
    </BrowserRouter>
  );
}

export default App;

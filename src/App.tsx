import React, { useState } from 'react';
import './App.css';
import { booksApi, useGetBooksQuery } from './store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './pages/footer/Footer';
import { Header } from './pages/header/Header';
import { Page404 } from './pages/page404/Page404';
import { Main } from './pages/main/Main';
import { Chat } from './pages/chat/Chat';

function App() {
  // для вывода карточек книг
  const [count, setCount] = useState('');
  const { data = [], isLoading } = useGetBooksQuery(count);
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/chat" element={<Chat />} />
        {/* <Route path="/anyPage" element={< AnyPage/>} /> */}
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

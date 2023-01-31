import React, { useState } from 'react';
import './App.css';
import { booksApi, useGetBooksQuery } from './store';

function App() {
  // для вывода карточек книг
  const [count, setCount] = useState('');
  const { data = [], isLoading } = useGetBooksQuery(count);
  return <div className="App"></div>;
}

export default App;

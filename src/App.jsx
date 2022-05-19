import React from 'react';
import './App.css';
import Header from './componets/Header';
import AddTodo from './componets/AddTodo';

function App() {
  return (
    <div className="app">
      <Header />
      <AddTodo />
    </div>
  );
}

export default App;

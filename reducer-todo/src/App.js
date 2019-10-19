import React from 'react';
import './App.css';
import TodoList from './Components/TodoList';

function App() {
  return (
    <div className="App">
      <h1>YOUR TODO LIST: </h1>
      <TodoList />
    </div>
  );
}

export default App;

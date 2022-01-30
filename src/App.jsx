import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import AddTodoForm from './components/AddTodoForm/AddTodoForm';
import TodoList from './components/TodoList/TodoList';

function App() {

  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <Header />
      <AddTodoForm todo={todos} setTodo={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;

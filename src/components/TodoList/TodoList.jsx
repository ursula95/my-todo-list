import React from 'react';
import TodoItem from './TodoItem';
import "./TodoList.css";

function TodoList({ todos, setTodos }) {

  function handleDeleteTodo(id) {
    const filteredTodos = todos.filter(item => item.id !== id);
    setTodos(filteredTodos);
  }

  function hanldeUpdateTodoList(updatedTodo) {
    const newTodos = todos.map(todo => {
      if (todo.id === updatedTodo.id) {
        return updatedTodo;
      }
      return todo;
    });
    setTodos(newTodos);
  }

  return (
    todos.map(item => <TodoItem key={item.id} {...item} updateTodoList={hanldeUpdateTodoList} deleteTodo={handleDeleteTodo} />)
  );
}

export default TodoList;


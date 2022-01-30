import React, { useState } from 'react';
import "./TodoList.css";

function TodoItem({ id, title, isChecked, updateTodoList, deleteTodo }) {

  const [value, setValue] = useState(title);
  const [isOnEdit, setIsOnEdit] = useState(false);

  function handleClickEditTodo() {
    setIsOnEdit(true);
    setValue(title);
  }

  const handleChange = (event) => setValue(event.target.value);

  function handleClickSave() {
    updateTodoList({ id, title: value, isChecked });
    setIsOnEdit(false);
  }

  function hanldeClickToggleCheck() {
    updateTodoList({ id, title: value, isChecked: !isChecked });
  }

  function hanldeClickDelete() {
    deleteTodo(id);
  }

  return (
    <div>
      {
        isOnEdit ?
          <div>
            <input className='editInput' value={value} onChange={handleChange} />
            <div>
              <button className="editButton" onClick={handleClickSave}>Save</button>
            </div>
          </div> :
          <div>
            <div className={isChecked ? 'checked' : 'todoItem'}>{title}</div>
            <div className="buttons">
              <button onClick={handleClickEditTodo}>Edit</button>
              <button onClick={hanldeClickToggleCheck}>Check / Uncheck</button>
              <button onClick={hanldeClickDelete}>Delite</button>
            </div>
          </div>
      }
    </div>
  );
}

export default TodoItem;



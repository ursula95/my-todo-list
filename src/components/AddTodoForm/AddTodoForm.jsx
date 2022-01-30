import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import "./AddTodoForm.css";

function AddTodoForm ({todo, setTodo}) {

    const [value, setValue] = useState('');

    function saveTodo() {
      setTodo(
        [...todo, {
          id: uuid(),
          title: value,
          isChecked: false
          } 
        ]
      )
      setValue('')
    }

    return (
      <div>
          <input className="addInput" placeholder="Enter a new task" value={value} onChange={(e) => setValue(e.target.value)}/>
          <button className="addButton" onClick={saveTodo}>Save</button>
      </div>
    );
}

export default AddTodoForm;
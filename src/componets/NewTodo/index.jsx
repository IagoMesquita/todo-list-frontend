import React from 'react';
import './NewTodo.css';

function NewTodo() {
  return (
    <div className="new-todo">
      <div className="check-task">
        <input type="checkbox" name="" id="" />
        <p>NOVA TAREFA</p>
      </div>
      <div className="del-edit">
        <button type="button">
          <i className="bi bi-x-circle" />
        </button>
        <button type="button">
          <i className="bi bi-pencil-square" />
        </button>
      </div>
    </div>
  );
}

export default NewTodo;

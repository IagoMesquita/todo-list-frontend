/* eslint-disable operator-linebreak */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './NewTodo.css';

function NewTodo({ todo, listTodo }) {
  const [listTask, setListTask] = listTodo;
  const [edit, setEdit] = useState(true);
  const excludeTodo = ({ target }) => {
    const newList = listTask
      .filter((item) => item.id !== +target.value);
    setListTask(newList);
  };

  return (
    <div className="new-todo">
      <div className="check-task">
        <select name="status" id="status">
          <option value="pen">Pendente</option>
          <option value="and">Em andamento</option>
          <option value="pro">Pronto</option>
        </select>
        {
          edit ? (
            <p>
              { todo.task }
            </p>
          )
            :
            <input type="text" value={todo.task} />
        }
      </div>
      <div className="del-edit">
        <button
          type="button"
          onClick={excludeTodo}
          value={todo.id}
        >
          x
        </button>
        <button type="button" onClick={() => setEdit(!edit)}>
          <i className="bi bi-pencil-square" />
        </button>
      </div>
    </div>
  );
}

NewTodo.propTypes = {
  listTodo: PropTypes.arrayOf().isRequired,
  todo: PropTypes.shape({
    id: PropTypes.number,
    status: PropTypes.string,
    task: PropTypes.string,
  }).isRequired,
};

export default NewTodo;

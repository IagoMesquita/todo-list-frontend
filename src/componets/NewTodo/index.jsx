import PropTypes from 'prop-types';
import React from 'react';
import './NewTodo.css';

function NewTodo({ todo }) {
  return (
    <div className="new-todo">
      <div className="check-task">
        <input type="checkbox" name="" id="" />
        <p>{todo}</p>
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

NewTodo.propTypes = {
  todo: PropTypes.string.isRequired,
};

export default NewTodo;

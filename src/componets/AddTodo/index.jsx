import React, { useState } from 'react';
import './addTodo.css';

function AddTodo() {
  const [task, setTask] = useState('');
  const [listask, setLisTask] = useState([]);

  const handleInputChange = ({ target }) => {
    const { value } = target;
    setTask(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLisTask([...listask, task]);
    setTask('');
  };

  return (
    <section>
      <form
        className="container"
        onSubmit={handleSubmit}
      >
        <input
          className="shearch"
          type="text"
          name="todo-input"
          value={task}
          onChange={handleInputChange}
        />
        <button
          className="btn"
          type="submit"
        >
          Add Todo
        </button>
      </form>

    </section>
  );
}

export default AddTodo;

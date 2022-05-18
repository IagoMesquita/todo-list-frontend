import React, { useState } from 'react';

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
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo-input"
          value={task}
          onChange={handleInputChange}
        />
        <button
          type="submit"
        >
          Add Todo
        </button>
      </form>
    </section>
  );
}

export default AddTodo;

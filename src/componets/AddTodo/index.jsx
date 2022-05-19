import React, { useState } from 'react';
import './addTodo.css';
import NewTodo from '../NewTodo';

function AddTodo() {
  const [task, setTask] = useState('');
  const [listTask, setLisTask] = useState([]);

  const handleInputChange = ({ target }) => {
    const { value } = target;
    setTask(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLisTask([...listTask, task]);
    setTask('');
  };

  return (
    <main className="container-content">
      <form
        className="container-input"
        onSubmit={handleSubmit}
      >
        <input
          className="shearch"
          placeholder="Sua tarefa"
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
      <section>
        {
          listTask.map((item) => (
            <NewTodo todo={item} />
          ))
        }
      </section>

    </main>
  );
}

export default AddTodo;

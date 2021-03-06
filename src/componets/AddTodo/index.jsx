import React, { useState, useEffect } from 'react';
import './addTodo.css';
import NewTodo from '../NewTodo';

function AddTodo() {
  const [id, setId] = useState(0);
  const [task, setTask] = useState('');
  const [listTask, setListTask] = useState([]);

  useEffect(() => {
    setListTask(JSON.parse(localStorage.getItem('tasks')));
  }, []);

  const handleInputChange = ({ target }) => {
    const { value } = target;
    setTask(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) return;
    const arrayOfTask = JSON.parse(localStorage.getItem('tasks')) || [];
    setListTask([...listTask, { id, task }]);
    arrayOfTask.push({ id, task });
    localStorage.setItem('tasks', JSON.stringify(arrayOfTask));
    setTask('');
    setId(id + 1);
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
            <NewTodo
              key={item.id}
              todo={item}
              listTodo={[listTask, setListTask]}
            />
          ))
        }
      </section>
      {/* <section>
        {
          listTask.map((item) => (
            <NewTodo
              key={item.id}
              todo={item}
              listTodo={[listTask, setListTask]}
            />
          ))
        }
      </section> */}

    </main>
  );
}

export default AddTodo;

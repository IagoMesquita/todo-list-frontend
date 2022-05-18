import React from 'react';

function AddTodo() {
  return (
    <section>
      <form>
        <input
          type="text"
          name="todo-input"
        />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </section>
  );
}

export default AddTodo;

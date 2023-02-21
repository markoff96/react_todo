import { useState } from 'react';

function Input({ addTodo }) {
  const [text, setText] = useState('');
  const createNewTask = (event) => {
    event.preventDefault();

    if (text) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <div className="todoForm">
      <form onSubmit={createNewTask}>
        <input
          className="inputField"
          placeholder="Type here..."
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Input;

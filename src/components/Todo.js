import { useState } from 'react';

function Todo({ todo, deleteTodo, index }) {
  const [complete, setComplete] = useState(false);

  const completeTodo = () => {
    setComplete(true);
    console.log(complete);
  };

  return (
    <div className="todoBlock">
      <div className={` ${complete ? 'completeTask' : 'todoField'}`}>
        <div className="todoText">{todo}</div>
        <button className="todoButtons" onClick={() => completeTodo(index)}>
          &#9989;
        </button>
        <button className="todoButtons" onClick={() => deleteTodo(index)}>
          &#10060;
        </button>
      </div>
    </div>
  );
}

export default Todo;

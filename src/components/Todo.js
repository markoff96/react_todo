function Todo({ todo, deleteTodo, index, completeTodo }) {
  return (
    <div className="todoBlock">
      <div className="todoField">
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

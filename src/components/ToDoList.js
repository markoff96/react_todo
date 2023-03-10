import Todo from './Todo';

function ToDoList({ todos, deleteTodo }) {
  return (
    <div>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo, index) => (
        <Todo key={todo} todo={todo} deleteTodo={deleteTodo} index={index} />
      ))}
    </div>
  );
}

export default ToDoList;

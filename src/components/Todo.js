function Todo({todo, deleteTodo, index}) {
    return(
       <div className="todoField" >
        <div className="todoText">{todo}</div>
        <button onClick={() => deleteTodo(index) } >X</button>
       </div>
    )
}

export default Todo
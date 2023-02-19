import Todo from "./Todo"

function ToDoList({todos}) {
    return (
       todos.map((todo, index) => <Todo key={index} todo={todo}/>)
    )
    

}

export default ToDoList

import Todo from "./Todo"







const TodoList = ({ todos, todoDelete, toogleTodoComplete, setTodoEdit }) => {


  return (
    <div>
        <h1 className="text-end">TodoList</h1>
        {
            todos.map((todo) =>(
                <Todo 
                todo={todo}
                completed={todo.completed}
                key={todo.id}
                todoDelete={todoDelete}
                toogleTodoComplete={toogleTodoComplete}  
                setTodoEdit={setTodoEdit}
              
                />
            ))
            
        }
        
       
    </div>
  )
}

export default TodoList

import Todo from "./Todo"







const TodoList = ({ todos, todoDelete, toogleTodoComplete, setTodoEdit }) => {


  return (
    <div>
        <h2 className="text-center display-4">Lista de Tareas</h2>
        { 
          todos.length === 0 
          ?(
              <div className="alert alert-primary text-end">
                    No hay tareas Pendientes
              </div>
            )

          :(
              todos.map((todo) =>(
                <Todo 
                todo={todo}
                completed={todo.completed}
                key={todo.id}
                todoDelete={todoDelete}
                toogleTodoComplete={toogleTodoComplete}  
                setTodoEdit={setTodoEdit}
              
                />
          )))
            
            
            
            
        }
        
        
    </div>
  )
}

export default TodoList
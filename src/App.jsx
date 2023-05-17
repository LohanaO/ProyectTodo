import { useState } from "react";
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"

const initialsTodos = [
  {
    id:1,
    title: "Todo #1",
    description: 'Descripcion de la todo1',
    completed: false

},
{
  id:2,
  title: "Todo #2",
  description: 'Descripcion de la todo2',
  completed: true

}

];

function App() {
  
  const [todos, setTodos] = useState(initialsTodos);
  const [todoEdit, setTodoEdit] = useState(null);

  const todoDelete = (todoId) => {
    const changeTodo = todos.filter(todo => todo.id !== todoId);
    setTodos(changeTodo);
  }

  const toogleTodoComplete =(todoId)=>{

   
    const changeTodos = todos.map (todo =>todo.id === todoId ? {...todo, completed:!todo.completed} : todo)
    setTodos(changeTodos)

  }

  const todoAdd = (todo) =>{
    const newTodo ={
      id: Date.now(),
      ...todo,
      completed: false
    }
    const changeTodos =[
      newTodo,
      ...todos
     
    ]
      
     
    setTodos(changeTodos);
  }

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-8">
          <TodoList 
          todos={todos}
          todoDelete={todoDelete}
          toogleTodoComplete={toogleTodoComplete}
          setTodoEdit={setTodoEdit}
           />
        </div>
        <div className="col-4">
          <TodoForm todoAdd={todoAdd}/>
        </div>

      </div>
      
    </div>
  )
}

export default App

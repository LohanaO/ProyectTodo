import { useState } from "react"

const initialsValues = {
  title:"",
  description:""
}

const TodoForm = ({todoAdd}) => {
const [values, setValues] = useState(initialsValues);
const {title, description} = values;
const [error, setError] = useState(null);
const [succesMessage, setSuccesMessage] = useState(null);

const handleInputChange = (event) => {
 const changeValues={
  ...values,
  [event.target.name]:event.target.value
 }
  setValues(changeValues)

}

const handleSubmit = (event) => {
  event.preventDefault();
  if(title.trim() ===""){
    setError("Debes indicar un titulo para la tarea")
    return ;
  }
  if (description.trim() ===""){
    setError("Debes indicar una descripción para la tarea ")
    return;
  }
  // agregar la tarea
  todoAdd(values);
  setSuccesMessage("Tarea agregada con Éxito...")
  setValues(initialsValues);
  setTimeout(() => {
    setSuccesMessage(null);
  }, 1500);
}
  return (
    <div>
    <h1>Nueva Tarea</h1>
    <form onSubmit={handleSubmit}>
      <input type="text" 
            placeholder="Titulo" 
            className="form-control"
            value={title}
            name="title"
            onChange={handleInputChange}
            />
      <textarea 
              className="form-control mt-2" 
              placeholder="Descripcion"
              value={description}
              name="description"
              onChange={handleInputChange}
              > 
      </textarea>
      <button 
              className="btn btn-primary mt-2 w-100"
              > 
              Agregar Tarea
      </button>
     </form>
      {
        error &&
          (
              <div className="alert alert-danger mt-2">
              {error}
              </div>
          )
        
          
      }
      {
        succesMessage &&
        (
          <div className="alert alert-success mt-2">
              {succesMessage}
              </div>
        )
      }
     
    </div>
  )
}

export default TodoForm
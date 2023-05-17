

const Todo = ({ todo, completed, todoDelete, toogleTodoComplete, setTodoEdit }) => {
  return (
    <div className="card mt-4">
    <div className="card-body">
        <h3 className="card-title text-end">
            {todo.title}
            <button className={`btn btn-sm ${completed ? 'btn-outline-success' : 'btn-success'} ms-2`}
                    onClick={()=>toogleTodoComplete(todo.id)}>
            {completed ? 'Terminado' : 'Terminar'}
        </button>
        </h3>
        
        <p className="card-text text-end">
            {todo.description}
        </p>
            <hr/>
            <div className="d-flex justify-content-end">
                <button style={{marginRight:'10px'}} className="btn btn-sm btn-outline-primary"
                        onClick={() => setTodoEdit(todo)}
                >
                    Editar
                </button>
                <button className="btn btn-sm btn-outline-danger" onClick={()=>todoDelete(todo.id)}>
                    Eliminar
                </button>
            </div>
</div>

</div>
  )
}

export default Todo
import Todo from './Todo'
import { useContext } from 'react'
import { TodoContext } from './TodoContextProvider'
function Todos() {
  const { todos } = useContext(TodoContext)
  return (
    <div>
      {todos.length === 0 && <p className="todos__empty">Empty</p>}
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default Todos

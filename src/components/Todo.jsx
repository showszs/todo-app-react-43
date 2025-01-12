import { FaCheck } from 'react-icons/fa'
import { RiDeleteBin2Line, RiTodoFill } from 'react-icons/ri'
import { useContext } from 'react'
import { TodoContext } from './TodoContextProvider'

function Todo({ todo: { id, title, completed } }) {
  const { toogleHandler, removeHandler } = useContext(TodoContext)
  return (
    <div className="todo">
      <div className="todo__id">{id}</div>
      <RiTodoFill className="todo__icon" />
      <h2 className="todo__title">{title}</h2>
      <div className="todo__completed">{completed.toString()}</div>
      <RiDeleteBin2Line className="todo__icon-delete" onClick={() => removeHandler(id)} />
      <FaCheck className="todo__icon-check" onClick={() => toogleHandler(id)} />
    </div>
  )
}

export default Todo

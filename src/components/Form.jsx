import { useState } from 'react'
import { useContext } from 'react'
import { TodoContext } from './TodoContextProvider'

function Form() {
  const { addHandler } = useContext(TodoContext)
  const [title, setTitle] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    addHandler({
      id: Date.now(),
      title: title,
      completed: false
    })
    setTitle('')
  }

  const handleChange = (e) => {
    setTitle(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder={'Enter new todo'} value={title} onChange={handleChange} />
      <button className="btn__add" type="submit">
        Add
      </button>
    </form>
  )
}

export default Form

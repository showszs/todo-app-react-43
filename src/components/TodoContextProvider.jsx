import { MOCK_TODOS } from '../data/mock-todos'
import { createContext, useState } from 'react'

export const TodoContext = createContext({
  todos: [],
  addTodo: () => {},
  removeTodo: () => {},
  toogleTodo: () => {},
  removeAllTodo: () => {},
  clearCompletedTodo: () => {}
})

function TodoContextProvider({ children }) {
  const [todos, setTodos] = useState(MOCK_TODOS)

  const addHandler = (todo) => {
    setTodos([...todos, todo])
  }

  const removeHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const removeAllHandler = () => {
    setTodos([])
  }

  const clearCompletedHandler = () => {
    setTodos(todos.filter((todo) => !todo.completed))
  }

  const toogleHandler = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  const completedCount = todos.filter((todo) => todo.completed).length
  return (
    <TodoContext.Provider
      value={{
        todos,
        addHandler,
        removeHandler,
        toogleHandler,
        removeAllHandler,
        clearCompletedHandler,
        completedCount
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export default TodoContextProvider

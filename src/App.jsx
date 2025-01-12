import Form from './components/Form'
import Todos from './components/Todos'
import Actions from './components/Actions'
import TodoContextProvider from './components/TodoContextProvider'

function App() {
  return (
    <TodoContextProvider>
      <div className="container">
        <h1 className="title">Todo App</h1>
        <Form />
        <Actions />
        <Todos />
      </div>
    </TodoContextProvider>
  )
}

export default App

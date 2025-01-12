import { useContext } from 'react'
import Button from './Button'
import { RiDeleteBin5Line } from 'react-icons/ri'
import { TodoContext } from './TodoContextProvider'
function Actions() {
  const { removeAllHandler } = useContext(TodoContext)
  return (
    <div className="actions">
      <Button title={'Delete All Todos'} type={'button'} onClick={removeAllHandler}>
        <RiDeleteBin5Line />
      </Button>
    </div>
  )
}

export default Actions

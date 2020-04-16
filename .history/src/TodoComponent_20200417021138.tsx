import React, { useState } from 'react'

const TodoComponent: React.FC = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button type="button" onClick={(): void => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

export default TodoComponent

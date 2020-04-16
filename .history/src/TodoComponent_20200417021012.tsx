import React, { useState } from 'react'

const TodoComponent: React.FC = () => {
  // Declare a new state variable, which we'll call "count"  const [count, setCount] = useState(0);
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

import React, { useState } from 'react'
import { TodoType } from 'types/Todo'
import Todo from 'components/Todo'

const TodoList: React.FC = (): JSX.Element => {
  const [todos, setTodo] = useState([])
  const todoList = todos.map((todo: TodoType) => (
    <Todo text={todo.text} key={todo.id} />
  ))

  return <ul>{todoList}</ul>
}

export default TodoList

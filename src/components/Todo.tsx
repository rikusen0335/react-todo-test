import React from 'react'
import PropTypes from 'prop-types'
import { TodoType } from 'types/Todo'

const Todo: React.FC<TodoType> = ({ text }): JSX.Element => {
  return (
    <li className="todo-input">
      <p>{text}</p>
      <button type="button">Delete</button>
    </li>
  )
}

Todo.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Todo

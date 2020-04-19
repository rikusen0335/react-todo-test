import React from 'react'
import './App.css'
import TodoList from 'components/TodoList'
import logo from './logo.svg'

const App: React.FC = () => {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
        </header>
        <TodoList />
      </div>
    </>
  )
}

export default App

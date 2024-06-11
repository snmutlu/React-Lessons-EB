import React from 'react'
import '../App.css'
import Todo from './Todo'

function TodoList({todos}) {
  return (
    <div className='todo-list'>
      {todos && todos.map((todo)=>(
          <Todo key={todo.id} todo = {todo}/>
        ))
      }
    </div>
  )
}

export default TodoList
import React from 'react'
import '../App.css'
import Todo from './Todo'

function TodoList({todos , onRemoveTodo}) {
  return (
    <div className='todo-list'>
      {todos && todos.map((todo)=>(
          <Todo key={todo.id} todo = {todo} onRemoveTodoPrp = {onRemoveTodo}/>
        ))
      }
    </div>
  )
}

export default TodoList
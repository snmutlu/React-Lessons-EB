import { useState } from 'react'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {

  const [todos, setTodos] = useState([]);

  const createTodo = (newTodo)=>{
    setTodos([...todos,newTodo])
  }

  const removeTodo = (removeId)=>{
    setTodos([...todos.filter((todo)=>todo.id!==removeId)]);
  }
  return (
   <div className='app'>
   <div className='todo-app'>
   <TodoCreate onCreateTodo={createTodo}/>
   <TodoList todos = {todos} onRemoveTodo = {removeTodo} />
   </div>
   </div>

  )
}

export default App

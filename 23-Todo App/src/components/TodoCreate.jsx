import React, { useState } from 'react'
import '../App.css'


function TodoCreate({onCreateTodo}) {

    const [newTodo , setNewTodo] = useState('');

    const clearInput = ()=>{
      setNewTodo("");
    }

    const createTodo = ()=>{
        if(!newTodo) return alert("Bir değer giriniz");

        const request = {
            id : Math.floor(Math.random()*999999),
            content : newTodo
        }

        onCreateTodo(request);
        clearInput();
    }

  return (
    <div className='todo-create'>
        <input 
        value={newTodo} onChange={(e)=>setNewTodo(e.target.value)}
        className='todo-input' type="text" placeholder='Todo Giriniz' />

        <button 
        onClick={createTodo}
        className='create-btn'>Todo Oluştur</button>
    </div>
  )
}

export default TodoCreate
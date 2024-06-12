import React from 'react'
import '../App.css'
import { CiSquareRemove } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";



function Todo({todo , onRemoveTodoPrp}) {

    const {id,content} = todo;

    const removeTodo = ()=>{
        onRemoveTodoPrp(id)
        console.log("Silinen todo:" , todo)
    }

    return (
        <>
        <div className='todo-wrapper'>
            <div className='todo-content'>{content}</div>
            <div className='icons'>
                <CiSquareRemove className='remove-icons' onClick={removeTodo} />
                <CiEdit className='edit-icons' />
            </div>
        </div>
        </>
    )
}

export default Todo
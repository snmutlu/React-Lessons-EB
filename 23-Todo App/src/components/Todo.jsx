import React from 'react'
import '../App.css'
import { CiSquareRemove } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";



function Todo({todo}) {
    return (
        <>
        <div className='todo-wrapper'>
            <div className='todo-content'>{todo.content}</div>
            <div className='icons'>
                <CiSquareRemove className='remove-icons' />
                <CiEdit className='edit-icons' />
            </div>
        </div>
        </>
    )
}

export default Todo
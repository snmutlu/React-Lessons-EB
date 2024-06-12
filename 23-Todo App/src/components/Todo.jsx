import React, { useState } from 'react'
import '../App.css'
import { CiSquareRemove } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { FaCheck } from "react-icons/fa6";



function Todo({todo , onRemoveTodoPrp , onUpdateTodo}) {

    const {id,content} = todo;
    const [editable, setEditable] = useState(false);
    const [editTodo, setEditTodo] = useState(content)

    const removeTodo = ()=>{
        onRemoveTodoPrp(id)
    }

    const updateTodo = ()=>{
        const request = {
            id : id,
            content : editTodo
        }
        onUpdateTodo(request);
        setEditable(false);
    }


    return (
        <>
        <div className='todo-wrapper'>
            <div className='todo-content'>
                {
                    editable ? <input className='todo-input marg-b' type="text" value={editTodo} onChange={(e)=>setEditTodo(e.target.value)} /> : content
                }
            </div>
            <div className='icons'>
                <CiSquareRemove className='remove-icons' onClick={removeTodo} />
                {
                    editable ? <FaCheck className='check-icons' onClick={updateTodo} /> 
                    : <CiEdit className='edit-icons' onClick={()=>{
                        setEditable(true);
                    }} />
                }
                
                

            </div>
        </div>
        </>
    )
}

export default Todo
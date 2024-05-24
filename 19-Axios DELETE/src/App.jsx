import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'


const BASE_URL = "http://localhost:3004";


function App() {

  const deleteUserById = async (userId) =>{
    //! axios.delete Bir datayı silmek için kullanılır.
  const deletedResponse =  await axios.delete(`${BASE_URL}/users/${userId}`)
  console.log(deletedResponse.data)    
}



useEffect(()=>{
  deleteUserById("2")
  //! Bu şekilde 2 id'li kullanıcımızı silmiş oluyoruz.
},[])

  return (
    <>
      
    </>
  )
}

export default App

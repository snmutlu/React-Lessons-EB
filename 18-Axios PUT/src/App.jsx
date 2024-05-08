import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

const BASE_URL = "http://localhost:3004";

/* Json Server Kurulumu: Öncelikle sudo npm install -g json-server ile global olarak
json serverimizi kuruyoruz. Sonrasında json-server --version ile kurulumu kontrol ediyoruz.
Sonrasında json-server --watch ./src/db.json --port 3004 ile json serverimizin izleyeceği
dosya yolunu ve çalışacağı portu vermiş oluyoruz. */

function App() {


const updateUser = async (userId,updatedUser)=>{
  //! PUT veri güncellemek için kullanılır.
  await axios.put(`${BASE_URL}/users/${userId}`,updatedUser)
}

useEffect (()=>{

  const changeUserData = {
    "username" : "Hüsniye",
    "password" : "1111"
  }

  updateUser("d5ab",changeUserData)
},[])


  return (
    <>
    </>
  )
}

export default App

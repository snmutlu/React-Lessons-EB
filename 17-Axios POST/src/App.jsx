import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const BASE_URL = "http://localhost:3000";

  const createUser = async (newUser)=>{
    const response = await axios.post(`${BASE_URL}/users`,newUser)
    console.log("response",response.data)
  }

  const newUser = {
    "username" : "Ceyda",
    "password" : "123"
  }


  useEffect(()=>{
    createUser(newUser)
  },[])

  return (
    <div>
    
    </div>
  )
}

export default App

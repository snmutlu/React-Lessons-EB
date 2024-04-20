import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

const BASE_URL = "http://localhost:3005";

function App() {
  
  const getAllUsers = async ()=>{
    const response  = await axios.get(BASE_URL + "/users")
    console.log(response.data)
  }

  const getUserById = async (userId)=>{
    // const response = await axios.get(BASE_URL+"/users/"+userId)

    //*Template litirals ile şu şekilde yapabiliriz. -->
    const response = await axios.get(`${BASE_URL}/users/${userId}`)
    
    console.log(response.data)
  }

  useEffect(()=>{
    // getAllUsers();
    getUserById(2);
  },[])

  return (
    <div>

    </div>
  )
}

export default App

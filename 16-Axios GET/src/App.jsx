import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

const BASE_URL = "http://localhost:3005";

/* Json Server Kurulumu: Öncelikle sudo npm install -g json-server ile global olarak
json serverimizi kuruyoruz. Sonrasında json-server --version ile kurulumu kontrol ediyoruz.
Sonrasında json-server --watch ./src/db.json --port 3004 ile json serverimizin izleyeceği
dosya yolunu ve çalışacağı portu vermiş oluyoruz. */

function App() {
  
  const getAllUsers = async ()=>{
    const response  = await axios.get(BASE_URL + "/users")
    console.log(response.data)
  }

  const getUserById = async (userId)=>{
    // const response = await axios.get(BASE_URL+"/users/"+userId)
    //! axios.get Database'den bir veriyi çağırmak için kullanılır.
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

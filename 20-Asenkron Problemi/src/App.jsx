import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

const BASE_URL = "http://localhost:3004";


function App() {

  const getUserById = async (userId)=>{
    const responseUserId = await axios.get(`${BASE_URL}/users/${userId}`)
    return responseUserId.data.postId;
  }

  const getPostById = async (postId)=>{
    const responsePostId = await axios.get("https://jsonplaceholder.typicode.com/posts/"+postId)
    return responsePostId.data
  }


  const getPost = async (userId)=>{
    const postId = await getUserById(userId);
    const postData = await getPostById(postId)
    console.log(postData);
  }

  useEffect(()=>{
    getPost("1111");
    getPost("2222");
  },[])

  return (
    <>

    </>
  )
}

export default App

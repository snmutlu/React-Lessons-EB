import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import Product from '../src/pages/Product'
import Contact from '../src/pages/Contact'
import NotFoundPage from '../src/pages/NotFoundPage'


function App() {

  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/about' element={<About/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='*' element={<NotFoundPage/>} />
      </Routes>
    </div>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from '../src/pages/Home'
import About from '../src/pages/About'
import Product from '../src/pages/Product'
import Contact from '../src/pages/Contact'
import NotFoundPage from '../src/pages/NotFoundPage'
import EmployeeAbout from './pages/EmployeeAbout'
import CompanyAbout from './pages/CompanyAbout'


/*
!Önemli not : 
*Eğer iç içe Route yapıları kullanıyorsak içteki (children) Route'ları
*render etmek istiyorsak //! Outlet componentini kullanmamız gerekiyor.

*Outlet componentini parent Route'umuzun altında kullanmamız gerekiyor.
*Yani bu projede About componenti içerisinde.

!Not : İç içe Route yapılarında içteki (child) Route'lara "/" koyarak url vermiyoruz.
*/


function App() {

  return (
    <div>
      <Header />
      <div className='routes'>
        <Routes>
          <Route path='/about' element={<About />} >
            <Route path='employee' element={<EmployeeAbout />} />
            <Route path='company' element={<CompanyAbout />} />
          </Route>
          <Route path='/product' element={<Product />} />
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>

    </div>
  )
}

export default App

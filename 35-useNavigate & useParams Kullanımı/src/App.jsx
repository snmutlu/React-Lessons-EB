import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Contact from './pages/Contact'
import NotFoundPage from './pages/NotFoundPage'
import EmployeeAbout from './pages/EmployeeAbout'
import CompanyAbout from './pages/CompanyAbout'
import ProductDetails from './pages/ProductDetails';


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
          <Route path='/products' element={<Products />} />

          {/* Burada useNavigate ile gelen id'yi " : " koyarak bir değişkene atamış oluyoruz,
          ProductDetails component'inde ise useParams ile yakalıyoruz. */}
          <Route path='/product-details/:id' element={<ProductDetails />} />

          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>

    </div>
  )
}

export default App

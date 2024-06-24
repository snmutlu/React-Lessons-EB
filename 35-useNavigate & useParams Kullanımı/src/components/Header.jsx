import React from 'react'
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className='navbar'>
      <Link className='navbar-items' to={'/'} > Anasayfa </Link>
      <Link className='navbar-items' to={'/products'} > Ürünler </Link>
      <Link className='navbar-items' to={'/about'} > Hakkında </Link>
      <Link className='navbar-items' to={'/contact'} > İletişim </Link>
    </div>
  )
}

export default Header
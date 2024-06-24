import React from 'react'
import { Link,Outlet } from 'react-router-dom'

function About() {
  return (
    <div>
      <h1>About</h1>
      <hr />
      <Link className='link' to={'employee'} > Çalışanlar Hakkında </Link>
      <Link className='link' to={'company'} > Şirket Hakkında </Link>
      <Outlet/>
    </div>
  )
}

export default About
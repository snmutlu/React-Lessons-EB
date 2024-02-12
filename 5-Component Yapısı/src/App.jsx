import { useState } from 'react'

import './App.css'
import Login from './login' /* Burada oluşturduğumuz login.jsx dosyamızın
içerisindeki Login componentini import etmiş oluyoruz. Componentimizi
export default olarak export ettiğimiz için süslü parantez kullanmadan import
edebiliyoruz.*/

import { users } from './login' /* Burada login sayfasının içerisinde bulunan
users componentimizi direk export ettiğimiz için süslü parantezler içerisinde
çağırıyoruz. */

function App() {

  console.log(users); // Burada import ettiğimiz users componentimizi kullanmış olduk

  return (
    // <> Bu işaret fragment yapısıdır. Kapsayıcı div oluşturmak için kullanılır.
    <> 
      <div>
        <Login /> {/*Burada oluşturduğumuz Login componentimizi kullanmış oluyoruz.*/}
      </div>
      <hr />
      <div>
        <Login/>
      </div>
    {/* Bu şekilde oluşturduğumuz componentleri istediğimiz yerde birden çok kez
    istediğimiz gibi çağırabiliyoruz. */}
    </>
  )
}

export default App



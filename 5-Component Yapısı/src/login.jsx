import React from 'react'

export const users = [
    {
        username :"Mutlu",
        password : "1"
    },
    {
        username : "Selma",
        password : "2"
    }
]

function Login() {
  return (
    <>
    <div>Login</div>
    <div>
        <p>Kullanıcı Adınız</p>
        <input type="text" />
      </div>
      <div>
        <p>Şifreniz</p>
        <input type="password" />
      </div>
      <div>
        <button>Giriş </button>
      </div>
    </>
  )
}

export default Login

/* 
Export default ile export arasındaki fark:
Bizler export default ile export ettiğimiz bütün componentleri
dilediğimiz isimle çağırabiliriz.

Eğer biz default kullanmadan direk export edersek çağırırken
süslü parantezler içerisinde ve aynı isimle çağırmak zorundayız. */
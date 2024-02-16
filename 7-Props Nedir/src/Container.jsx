import React from 'react'
//? 4
//? Component içerisinde component tanımlama:

// function Container(props) {
// //* Burada oluşturduğumuz Container componentinin içerisine
// //* app.jsx sayfamızda Product componentimizi children olarak
// //* vermiş oluyoruz. Ve bunları props ile children objesi
// //* olarak yakalıyoruz.
//   console.log(props);
//   return (
//     <div>
//     <div>Container Componenti Çalıştı</div>
//     </div>
//   )
// }

// export default Container

/* Yani yukarıda kullandığımız props ile yakalamak yerine
biz bize dönen children objesini destructuring yapısıyla
yakalayabiliriz. 
! Örn: */



function Container({children}) {
  /* Burada app componentimizden gelen product componentimizi container
  componentinin içerisinde olduğu için children olarak yakalayabiliyor
  ve aşağıdaki gibi istediğimiz yerde kullanabiliyoruz. */
    return (
      <div>
      <div>Container Componenti Çalıştı</div>
      {children}
      </div>
    )
  }
  
  export default Container

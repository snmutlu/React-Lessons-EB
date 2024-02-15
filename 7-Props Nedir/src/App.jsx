import { useState } from 'react'
import './App.css'
import Product from './Product'
import Container from './Container'

/*
! Basit olarak anlatmak gerekirse propslar bir componentten
! diğerine değer taşımak için kullanılır.
 */
//? 1
// function App() {

//   const productName2 = "Buzdolabı";

//   return (
//       <div>
//         <Product productName="Ayakkabı" price = {3200}/>
//         <hr />
//         <Product productName ="Pantolon" price ={950}/>
//         {/* Burada productName ve price'ı Product componentimizde
//         props ile yakalayıp kullanmış oluyoruz. Burada kullandığımız
//         isimler tamamen bizim tercihimiz olan Props propertys
//         isimleri olarak geçiyor. */}
//         <hr />
//         <Product productName = {productName2} price = {15000}/>
//         {/* Burada yukarıda oluşturduğumuz productName2 değişkenini
//         burada kullanmış oluyoruz. */}
//       </div>
//   )
// }

// export default App

//? 4
//? Component içerisinde component tanımlama:


function App() {
  return (
    <div>
      <Container>
        <Product productName="Telefon" price={20500}/>
        {/* Buradaki product componentimizi children olarak
        destructuring yapısı ile container componentinde yakalamak için
        container componentinin içerisine koyuyoruz. */}
      </Container>
    </div>
  )
}

export default App
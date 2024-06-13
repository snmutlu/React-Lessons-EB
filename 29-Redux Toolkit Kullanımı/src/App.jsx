//! Ders linki : https://www.youtube.com/watch?v=iIPS7DdY-wQ&list=PLURN6mxdcwL-xIXzq92ZJN9yRW7Q0mjzw&index=29
/* Öncelikle redux toolkit kullanabilmek için kütüphaneleri ekliyoruz. Bütün bu npm install
komutları için Redux Toolkit Quick Start bölümünü takip edebiliriz.

Sonrasında store adında bir component oluşturuyoruz ve içerisine store ve reducer'larımızı
tanımlıyoruz.

Sonrasında Provider'ı import edip app componentimizi main componenti içerisinde sarıyoruz.
Provider'ımızın state'ine de oluşturduğumuz store'u veriyoruz.

Kullanacağımız State'lerimizi ve slice'larımızın içerisinde, fonksiyonları da reducers'ların
içerisinde tutuyoruz.

!Not : Store'ları bizim slice'larımızı topluca tuttuğumuz ve her yerden erişilebilecek, bütün
!componentlerden direk erişebileceğimiz depolar olarak düşünebiliriz. Oluşturduğumuz slice'larımızı
!store'da import ederiz ve sonrasında slice'ımızın istediğimiz component içerisinde state'ine veya
!reducers'larına erişip kullanabiliriz.
*/
import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './Redux/counterSlice'

function App() {

  //!Slice içerisindeki state değerine erişmek için useSelector kullanıyoruz:
  const {value} = useSelector((store)=>store.counter)
console.log(value)
// Burada slice'ımızın initialState'ini yakalayıp console'a yazdırmış olduk.


//!Slice içerisindeki reducers'lar içerisinde yazdığımız fonksiyonlara erişmek için ise
//!useDispatch kullanıyoruz:

const dispatch = useDispatch()

  return (
  <div>
    {/* Burada useSelector kullanarak eriştiğimiz state değerimizi önce ekrana yazdırıyoruz
    sonrasında isi arttırma ve azaltma için kullanacağımız fonksiyonlarımızı
    useDispatch kullanarak çekip aşağıdaki şekilde kullanabiliyoruz. */}
    <div>{value}</div>
    <div><button onClick={()=>dispatch(increment())}>Arttır</button></div>
    <div><button onClick={()=>dispatch(decrement())}>Azalt</button></div>
  </div>
  )
}

export default App

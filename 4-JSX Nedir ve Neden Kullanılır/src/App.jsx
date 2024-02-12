import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//Javascript kodları buraya yazılır. Örn:
let a = 11;
const firstName = "Mutlu";

let vize1 = 10;
let vize2 = 80;

let sonuc = true;

let isimler = [
  "Mutlu",
  "Selma",
  "Kubilay"
];

return (
  //Html kodları buraya yazılır
  <>
    <div>
      <p>a değişkeninin değeri : {a} </p>
      <p>Müşterinin Adı : {firstName}</p>
    </div>
    <div>
      {/* <p>Ortalama : {(vize1 + vize2) / 2}</p> */}

      {/* {sonuc ? <p>Ehliyeti alabilirsiniz</p> : <p>Ehliyet alamazsınız</p> } */}

      {/* {(vize1+vize2)/2 >=50 ? <p>Dersten geçtin</p> : <p>Dersten kaldın</p>} */}

      {isimler.map((isim,indexnumber)=>(
        /* Burada map function'u ile isimler dizimizin üstünde dönüyoruz ve 
        her bir elemanı isim olarak yakalıyoruz. Ayrıca her elemanın index 
        numarasını da indexnumber olarak yakalıyoruz. */
        <div style={{
          backgroundColor : "orange",
          border: "1px solid black"
        }} key={indexnumber}>{isim}</div>
        //Burada her isim için bir div oluşturulduğundan uniqe "key" prop.
        //hatası alırız. Bunun için key divin key parametresine index numaralarını
        //veriyoruz.
      ))}


    </div>
  </>
)
}

export default App

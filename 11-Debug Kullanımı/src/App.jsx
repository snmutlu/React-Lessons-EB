import { useState } from 'react'

import './App.css'

function App() {

  const [ortalama,setOrtalama] = useState(0);

  const [vize1,setVize1] = useState(0);

  const [vize2,setVize2] = useState(0);

  const ortalamaBul = ()=>{
    debugger;
    const toplamSonuc = topla()/2;
    yazdir(toplamSonuc);
  }

  const topla = ()=>{
    debugger;
    const toplam = vize1+vize2;
    return toplam;
  }

  const yazdir = (sonuc)=>{
    debugger;
    console.log("Ortalama:"+sonuc)
    setOrtalama(sonuc);
  }

  return (
    <>
      <div>
        <div>Ortalama:{ortalama}</div>
        <div><input type="number" value={vize1} onChange={(e)=>{ /* Burada kullandığımız onChange eventi sayesinde
        input içerisine bir değer girildiğinde bu event tetikleniyor. onChange eventi tetiklendiğinde bir
        callback function çalıştırıyoruz. Sonrasında bu onChange eventimiz içerisindeki event parametresini
        e olarak yakalıyor ve number tipinde setVize1'e atıyoruz. Ardından inputumuzun value'sine de useState
        imizin değişkenini yani vize1'i veriyoruz. */
          setVize1(Number(e.target.value))
        }}/></div>
        <div><input type="number" value={vize2} onChange={(e)=>{
          setVize2(Number(e.target.value))
        }} /></div>
        <div><button onClick={ortalamaBul}>Ortalama Bul</button></div>
      </div>
    </>
  )
}

export default App

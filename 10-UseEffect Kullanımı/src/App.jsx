//? useEffect Nedir?
/* Bir sayfa yüklendiğinde veya bir state'in değeri
değiştiğinde birşeyler yaptırmak istiyorsak
burada kullanmamız gereken hooks useEffect hooks'udur. */

//? useEffect Kullanımı
/* useEffect componentlerimizin js kodlarını yazdığımız bölümde
useEffect keyword'ü ile kullanılır. Aynı zamanda useEffect
sayfamıza import edilir. Ardından bu function'a bir
callback function ataması yaparız. İkinci parametre ise çalışma
şeklini belirtiyor. Yani bir kere mi çalışacak, herhangi bir useState
değeri değiştiğinde sürekli mi çalışacak, veya belirli bir
useState değeri değiştiğinde mi çalışacak. Buna oluşturduğumuz
callback function ardından , koyup verdiğimiz array ile karar
veriyoruz.*/


import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [firstName,setFirstName] = useState("Boş")

  const [lastName,setLastName] = useState("Boş")

  useEffect(()=>{ //*Burada callback functiondan sonra herhangi bir
    //*Array verilmediği için her zaman çalışacaktır.
    console.log("Her zaman çalışır");
  })

  useEffect(()=>{
    console.log("Component ilk render edildiğinde çalışır")
  },[]) //*Burada boş bir array verdiğimiz için sadece sayfa yüklendiğinde yalnız bir
  //*kere çalışacaktır. Sonrasında birdaha çalışmayacaktır.


  useEffect(()=>{
    console.log("Component ilk render edildiğinde ve firstName state'i değeri değiştiğinde çalışır")
  },[firstName])//*Burada array içerisine parametre olarak bir state verdik ve bu state değeri
  //*her değiştiğinde bu useEffect çalışacaktır.

  useEffect(()=>{
    console.log("Component ilk render edildiğinde ve lastName state'i değeri değiştiğinde çalışır")
  },[lastName]) //*Burada array içerisinde parametre olarak bir lastName state'i verdik ve bu
  //*state değeri her değiştiğinde bu useEffect çalışacaktır.


  //! Ayrıca biz parametre olarak birden fazla state'i array içerisinde verebiliriz. Parametre
  //! olarak verdiğimiz her state değerinden herhangi biri değiştiğinde useEffect tekrar çalışır.

  useEffect(()=>{
    console.log("İki useState değerinden herhangi birisi değiştiğinde çalışır")
  },[firstName,lastName]) //*Burada iki useState'i array içerisinde parametre olarak verdik.
  //*Buradaki herhangi bir state'in değeri değiştiğinde bu useEffect çalışacaktır.
  




  return (
  <div>
    <div><button onClick={()=> setFirstName("Mutlu")}>İsmi Değiştir</button></div>
    <div><button onClick={()=> setLastName("SENEM")}>Soyismi Değiştir</button></div>
    <div>İsim:{firstName}</div>
    <div>Soyisim:{lastName}</div>
  </div>
  )
}

export default App

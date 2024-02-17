
import { useState } from 'react'
import './App.css'

/*
? useState diğer programlama dillerindeki gibi değişken tanımlamak
? için kullanılan bir hooks'tur.
! Bir state'in değerini set methodunu kullanarak değiştirdiğinde
! component yeniden render edilir.
 */

function App() {

  const [firstName, setFirstname] = useState('Mutlu');
  /* Burada önce bir değişken tanımlıyoruz daha sonra array içerisinde
  değişken ismi ve değişken içerisindeki değeri güncelleyebilmek için
  kullanacağımız function'un ismini veriyoruz sonrasında eşittir diyip
  useState function'unu kullanıp firstName adında tanımlamış olduğumuz
  değişkenin başlangıç değerini veriyoruz. */
  const [lastName, setLastname] = useState("SENEM")

  const handleChange = () => {
    setFirstname("Selma")
  }

  /* Ayrıca biz useState içerisinde string, number, array, object, boolean
  gibi değerleri tutabiliriz. */

  const [names, setNames] = useState(["Mutlu", "Kubilay", "Selma", "Ceyda"]);

  //! Bir state'in değerini set methodunu kullanarak değiştirdiğimizde
  //! component yeniden render edilir. Örn:

  const [count, setCount] = useState(0);

  /* Burada aşağıda onclick ile çalıştırılan functionumuzun hangi işlemleri
  yapacağını belirtmiş olduk: */
  const arttir = () => {
    if (count < 10) {
    setCount(count + 1)
    }
  };

  const azalt = () => {
    if (count > 0) {
      setCount(count - 1)
    }
  };

  /* Burada count her arttığında veya azaldığında component'in tekrar render
  edildiğini görebiliriz. */

  console.log("Component render edildi");


  return (

    <div>
      <div>{firstName}</div>
      <div>{lastName}</div>
      <div><button onClick={() => { setFirstname("Kubilay") }}>İsmi Değiştir</button></div>
      {/* Burada ismi değiştirecek bir button oluşturduk ve sonrasında buttona
      tıklandığında çalışacak bir onClick eventi atadık. Bu event butona
      tıklanıldığında bir callback function yardımıyla setFirstname adındaki
      function'umuzu çalıştırdı ve içerisine "Kubilay" değerini atamış olduk. */}
      {/* Ayrıca biz bu işlemi farklı methodlarlada yapabiliriz. Örn: */}
      <div><button onClick={handleChange}>İsmi Değiştir 2</button></div>
      <hr />
      {/* Yukarıda oluşturduğumuz names array'imiz üzerinde dönüp içerisindeki
       değerleri ekrana da yazdırabiliriz. Örn: */}
      <div>{names.map((name, index) => (
        <div key={index}>{name}</div>
      ))}</div>

      <hr />
      {/* Bir state'in değerini set methodunu kullanarak değiştirdiğimizde
   component yeniden render edilir. Örn: */}

      <div>{count}</div>
      <div><button onClick={arttir}>Arttır</button></div>
      <div><button onClick={azalt}>Azalt</button></div>
    </div>

  )
}

export default App

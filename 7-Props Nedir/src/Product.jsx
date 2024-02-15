import React from 'react'
//? 1
// function Product(props) {
//     //* Burada yukarıda kulandığımız props sayesinde app component
//     //* inden gelen datalarımızı yakalayıp içerisinden almak istediğimiz
//     //* bilgilere ulaşabiliyoruz.
//     console.log(props);

//     return (
//         <div>
//             <div>Ürün Bilgileri</div>
//             <div>
//                 <div>İsim : {props.productName}</div>
//                 <div>Fiyat : {props.price} TL </div>
//             </div>
//         </div>

//     )
// }

// export default Product

//? 2

/*
! Bizler burada daha kolay bir yazım olması açısından bu props'ları
! yakalamak için destructuring yapısını kullanabiliriz. Örn: 
*/


// function Product(props) {

//     const { productName, price } = props; // <Product productName="Ayakkabı" price = {3200}/>

//     return (
//         <div>
//             <div>Ürün Bilgileri</div>
//             <div>
//                 <div>İsim : {productName}</div>
//                 <div>Fiyat : {price} TL </div>
//             </div>
//         </div>

//     )
// }

// export default Product

//? 3
/*
! Ayrıca biz bu işlemi bir seviye daha ileriye götürüp direkt olarak
! oluşturduğumuz componentin içerisindeki props propertys isimleri
! ile de yakalayabiliriz. Örn: 
*/


function Product({ productName, price }) {
    /* Bu şekilde biz objemizi direk destructuring edilmiş bir şekilde
yakalamış olduk ve direk kullanabildik */
    
    return (
        <div>
            <div>Ürün Bilgileri</div>
            <div>
                <div>İsim : {productName}</div>
                <div>Fiyat : {price} TL </div>
            </div>
        </div>
    )
}

export default Product







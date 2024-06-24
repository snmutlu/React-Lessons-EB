import React from 'react'
import {useNavigate} from 'react-router-dom';

function Product({product}) {
    const {name,price,id} = product;

    /* useNavigate : Bir butona tıklanıldığında - bir aksiyon olduğunda bir url'e yönlendirmek
    için kullandığımız bir hooks'tur */
    const navigate = useNavigate();

  return (
    <div style={{marginBottom:"50px", marginTop:"10px", backgroundColor:"lightblue",padding:"10px"}}>
    <h2>Ürün Detayı</h2>
    <h3>İsim : {name}</h3>
    <h4>Fiyatı : {price}</h4>
    <button onClick={()=>navigate("/product-details/"+id)}>Detayına Git</button>
    </div>
  )
}

export default Product
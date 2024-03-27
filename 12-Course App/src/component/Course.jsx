import React from 'react'

function Course({course1}) {

    const {id,title,description,price,link,image} = course1;

  return (
    <div className='course'>
        <div>
            <img className='course-img' src={image} width={250} height={150} />
            <h4 className='course-title'>{title}</h4>
            <h5 className='course-description'>{description}</h5>
            <h3 className='course-price'>{price}₺</h3>
            <div className='course-link-div'><a className='course-link' href={link}>Kursu Satın Almak İçin Tıklayınız</a></div>
        </div>
    </div>
  )
}

export default Course
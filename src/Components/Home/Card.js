import React from 'react'
import CardWrapper from '../../styles/CardWrapper' 
const Card = () => {
  return (
    <CardWrapper>
        <img className='card-image' src='https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
        alt="" />
        <div className="card-info">
            <p><span className='color bold'>$2905</span>/month</p>   
            <p>Palm Harbor</p>
            <p>Address</p>
            <p className='border'></p> 
        </div>
        <div className='card-details'>
            <p>Bedrooms</p>
            <p>Bathrooms</p>
            <p>Square Feet</p>
        </div>
    </CardWrapper>
  )
}

export default Card
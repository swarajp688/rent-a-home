import React from 'react'
import CardWrapper from '../../styles/CardWrapper' 
import {MdOutlineKingBed , MdOutlineBathroom} from 'react-icons/md';
import { TbSquareAsterisk } from "react-icons/tb";
const Card = ({property}) => {
  return (
    <CardWrapper>
        <img className='card-image' src='https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
        alt="" />
        <div className="card-info">
            <p><span className='color bold'>${property.price}</span>/month</p>   
            <p className='property-name'>{property.name}</p>
            <p className='property-adress'>{property.formattedAddress}</p>
            <p className='border'></p> 
        </div>
        <div className='card-details'>
            <p><MdOutlineKingBed className='color size'/>{property.bedrooms} Beds</p>
            <p><MdOutlineBathroom className='color size'/>{property.bathrooms} Bathrooms</p>
            <p><TbSquareAsterisk  className='color size'/>{property.squareFootage ? property.squareFootage : "850"} (ft^2)</p>
        </div>
    </CardWrapper>
  )
}

export default Card
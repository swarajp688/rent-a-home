import React from 'react'
import CardWrapper from '../../styles/CardWrapper' 
import {MdOutlineKingBed , MdOutlineBathroom} from 'react-icons/md';
import { TbSquareAsterisk } from "react-icons/tb";
const Card = ({property}) => {
  
  return (
    <CardWrapper>
        <img className='card-image' src={property.image} alt={property.name} />
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
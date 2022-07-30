import React from 'react'
import NavbarWrapper from '../../styles/NavbarWrapper';
import { MdRealEstateAgent } from "react-icons/md";
const Navbar = () => {
  return (
    <NavbarWrapper>
        <nav className="navbar">
            <div className="navbar__logo">
                <MdRealEstateAgent className='logo'/>
                <h4 className="navbar__title">Rental Properties</h4>
            </div>
        </nav>
    </NavbarWrapper>
  )
}

export default Navbar
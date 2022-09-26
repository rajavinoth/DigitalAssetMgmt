import React from 'react';
import '../CSS/Navbar.css';
import { CgLogOut } from "react-icons/cg";
import Logo from './Logo';
import Imenu from './Imenu';


const Navbar = () => {
    return(
        <div className='navbar'>         
            <Logo />
            <Imenu />
        </div>
    );
}

export default Navbar;
import React from "react";
import {BsCart} from 'react-icons/bs';
import {MdMovie} from 'react-icons/md';
import {FaBook} from 'react-icons/fa';
import {Link} from 'react-router-dom';

function NavBar({movieNumber}){
    return(
        <div className="navBar">
            <MdMovie/>
            <Link to="/">Video klub</Link>
            <Link to='/iznajmi' className='cart-items'><BsCart/></Link>

            <div className='cart-items'>
                <p>Iznamljeno je</p>
                <p className='cart-num'>{movieNumber}</p>
                <p> filmova</p>
            </div>

            <Link to='/kontakt' className="cart-items">
                <FaBook/>
                <p>Kontakt</p>
            </Link>




        </div>
        
    )
}

export default NavBar;
import React from "react";

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




        </div>
        
    )
}

export default NavBar;
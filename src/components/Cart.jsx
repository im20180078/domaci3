import React from 'react';
import Movie from './Movie'

const Cart = ({ films, removeFromCart, inCart }) => {
  return (
    <div className='all-movies'>
        {films.map((f) => (
        <Movie film={f} key={f.id} inCart={inCart} removeFromCart={removeFromCart}/>
      ))}
    </div>
  )
}

export default Cart;

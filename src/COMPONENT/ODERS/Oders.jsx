import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviowItem from '../reviowItem/ReviowItem';
import'./oder.css'
const Oders = () => {
    const cart = useLoaderData()
    return (
        <div className='shping-container'>
           <div className=''>
           {cart.map(product=><ReviowItem 
           key={product.id}
           product={product}
           ></ReviowItem>)}
           </div>
           <div className='cart-container'>
           <Cart Chart={cart}></Cart>
           </div>
        </div>
    );
};

export default Oders;
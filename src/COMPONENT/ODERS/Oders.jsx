import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviowItem from '../reviowItem/ReviowItem';
import'./oder.css'
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {faSave } from '@fortawesome/free-solid-svg-icons'

const Oders = () => {
    const CartProduct = useLoaderData()
    const [cart,setCart] = useState(CartProduct)
    const handelCartProduct =(id)=>{
    
        const DeleadProduct = cart.filter(pd=>pd.id !==id)
        setCart(DeleadProduct)
          removeFromDb(id)
    }
    const heldalClearCart =() =>{
        setCart([])
        deleteShoppingCart()
    }
    return (
        <div className='shping-container'>
           <div className='reviow-containet'>
           {cart.map(product=><ReviowItem 
           key={product.id}
           product={product}
           handelCartProduct={handelCartProduct}
           ></ReviowItem>)}
           </div>
           <div className='cart-container'>
           <Cart Chart={cart}
           heldalClearCart={heldalClearCart}
           >
             <Link to="/checkout">
                            <button className='the-checkout-btn'><samp>Proceed Checkout </samp>
                            <FontAwesomeIcon icon={faSave} /></button>
                        </Link>
           </Cart>
           </div>
        </div>
    );
};

export default Oders;
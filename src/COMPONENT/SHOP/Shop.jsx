import React, { useEffect, useState } from 'react';
import Prodcut from '../Product/Prodcut';
import './Shop.css'
const Shop = () => {
    const [products , setProducts] = useState([])

    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data =>setProducts(data))
    },[])
    return (
        <div className='shping-container'>
            <div className="product-countainer">
                  {
                    products.map(product =><Prodcut key={product.id}
                        product={product}
                    ></Prodcut>)
                  }
            </div>
            <div className="cart-container">
                <h1>cart name</h1>
            </div>
        </div>
    );
};

export default Shop;
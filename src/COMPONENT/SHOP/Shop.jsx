import React, { useEffect, useState } from 'react';
import Prodcut from '../Product/Prodcut';
import './Shop.css'
const Shop = () => {
    const [products , setProducts] = useState([])
       const [Chart ,setChart] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data =>setProducts(data))
    },[])
    const handelAddto = (product)=>{
        console.log(product)
        const newChart = [... Chart ,product]
         //   const newCart = [...Chart , product]
             setChart(newChart)
    }

    return (
        <div className='shping-container'>
            <div className="product-countainer">
                  {
                    products.map(product =><Prodcut key={product.id}
                        product={product}
                        handelAddto={handelAddto}
                    ></Prodcut>)
                  }
            </div>
            <div className="cart-container">
                <h1>Oder </h1>
                <p>add to cart : {Chart}</p>
            </div>
        </div>
    );
};

export default Shop;
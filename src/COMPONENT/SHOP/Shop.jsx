import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
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
        // console.log(product)
        // console.log(Chart)
         const newChart = [...Chart ,product]
         //   const newCart = [...Chart , product]
        //  console.log(newChart)
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
                <Cart Chart={Chart}></Cart>
            </div>
        </div>
    );
};

export default Shop;
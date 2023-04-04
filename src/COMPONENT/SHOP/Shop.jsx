import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Prodcut from '../Product/Prodcut';
import './Shop.css'
const Shop = () => {
    const heldalClearCart = ()=>{
        setChart([])
        deleteShoppingCart();
    }
    const [products , setProducts] = useState([])

       const [Chart ,setChart] = useState([])
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data =>setProducts(data))
    },[])
    useEffect(()=>{
        // console.log(products)
        const storageCart = getShoppingCart()
        const addCart = []
        // console.log(storageCart)
        for(const id in storageCart){
            // console.log(id)
            const saveProduct = products.find(product =>product.id ===id)
            // console.log(saveProduct)
           if(saveProduct){
            const quantity = storageCart[id]
            saveProduct.quantity = quantity
            addCart.push(saveProduct)
           }
        }
        setChart(addCart)
    },[products])
    const handelAddto = (product)=>{
         const newChart = [...Chart ,product]
              setChart(newChart)
              addToDb(product.id)
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
                <Cart Chart={Chart}
                heldalClearCart={heldalClearCart}
                
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;
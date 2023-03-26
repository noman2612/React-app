import React from 'react';
import './Product.css'
const Prodcut = (props) => {
    const {img,name,price,quantity,ratings}=props.product
    console.log(props.product)
    return (
        <div className='product'>
            <h1><img src={img} alt="" /> </h1>
            <div className='product-info'>
                <h6 className='product-name'> {name}</h6>
                <p>price ${price}</p>
                <p>ratings {ratings} star</p>
            </div>
            <button className='btn-add'>add to chat</button>
        </div>
    );
};

export default Prodcut;
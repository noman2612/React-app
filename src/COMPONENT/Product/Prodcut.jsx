import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css'
const Prodcut = (props) => {
    const {img,name,price,quantity,ratings}=props.product
    // console.log(props)
    const handelAddto = props.handelAddto
    return (
        <div className='product'>
            <h1><img src={img} alt="" /> </h1>
            <div className='product-info'>
                <h6 className='product-name'> {name}</h6>
                <p>price ${price}</p>
                <p>ratings {ratings} star</p>
            </div>
            <button onClick={()=>handelAddto(props.product)} className='btn-add'>add to chat
            const element = <FontAwesomeIcon icon={faShoppingCart} />

</button>
        </div>
    );
};

export default Prodcut;
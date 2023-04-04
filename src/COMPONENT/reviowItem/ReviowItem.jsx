import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faTrash } from '@fortawesome/free-solid-svg-icons'

import'./reviow.css'
const ReviowItem = ({product,handelCartProduct}) => {
    console.log(product);
    const {name,img,quantity,price,id} = product
    return (
        <div className='revowItem'>
          <img src={img} alt="" />
          <div className="review-info">
          <p className='name-product'>  {name}</p>
          <p>price:<samp className='text-org'> ${price}</samp></p>
          <p> order  quantity<samp className='text-org'> {quantity}</samp></p>
         
          </div>
       <button onClick={()=>handelCartProduct(id)} className='btn-delete'> <FontAwesomeIcon className='delead-icon' icon={faTrash} />
</button>
        </div>
    );
};

export default ReviowItem;
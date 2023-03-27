import React from 'react';

import'./Cart.css'
const Cart = ({Chart}) => {
    // console.log(Chart)
    let total = 0
    let totalShipping = 0
    // console.log()
   let quantity = 0
    for(const product of Chart){
        product.quantity = product.quantity ||1;
        total = total + product.price * product.quantity
         totalShipping = totalShipping + product.shipping * product.quantity
            quantity =quantity + product.quantity
    }
     let tex = total*7/100 * quantity

     let grandTotal = total + tex + totalShipping
    //  console.log(grandTotal)

    return (
        <div className='Cart-cont'>
            <h3>Order Summary </h3>
                <p>Selected Items: :{quantity}</p>
                <p>Total Price: $ {total}</p>
                <p>Total Shipping Charge: ${totalShipping}</p>
                <p>Tax: ${tex.toFixed(2)}</p>
                <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;
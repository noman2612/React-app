import React from 'react';

import'./Cart.css'
const Cart = ({Chart}) => {
    // console.log(Chart)
    let total = 0
    let totalShipping = 0
    console.log()
   
    for(const product of Chart){
        total = total + product.price
         totalShipping = totalShipping + product.shipping

    }
     let tex = total*7/100

     let grandTotal = total + tex + totalShipping
     console.log(grandTotal)

    return (
        <div className='Cart-cont'>
            <h3>Order Summary </h3>
                <p>Selected Items: :{Chart.length}</p>
                <p>Total Price: $ {total}</p>
                <p>Total Shipping Charge: ${totalShipping}</p>
                <p>Tax: ${tex}</p>
                <h5>Grand Total: ${grandTotal}</h5>
        </div>
    );
};

export default Cart;
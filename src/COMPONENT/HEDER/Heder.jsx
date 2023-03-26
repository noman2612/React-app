import React from 'react';
import logo from '../../images/Logo.svg'
import './Heder.css'
const Heder = () => {
    return (
        <div className='heder'>
            <img src={logo} alt="" />
            <div>
                <a href=""> Order </a>
                <a href="">Order Review </a>
                <a href="" > Manage Inventory</a>
                 <a href="">Login</a>
            </div>
        </div>
    );
};

export default Heder;
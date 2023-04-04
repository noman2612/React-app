import React from 'react';
import logo from '../../images/Logo.svg'
import './Heder.css'
import { Link } from 'react-router-dom';
const Heder = () => {
    return (
        <div className='heder'>
            <img src={logo} alt="" />
            <div>
                <Link to="/"> Shop </Link>
                <Link to="/Order-Review">Order Review </Link>
                <Link to="/Manage-Inventory" > Manage Inventory</Link>
                 <Link to="/Login">Login</Link>
            </div>
        </div>
    );
};

export default Heder;
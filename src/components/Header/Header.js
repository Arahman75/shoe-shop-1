import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'

const Header = () => {
    return (
        <div className='header'>
           <img src={logo} alt="" />
           <nav>
            <a href="/shop">Shop</a>
            <a href="/orders">Orders</a>
            <a href="/inventory">Inventory</a>
            <a href="/about">About</a>
           </nav>
        </div>
    );
};

export default Header;

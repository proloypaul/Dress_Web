import React from 'react';
import Products from '../Products/Products';
import './Header.css';

const Header = () => {
    // header section component
    return (
        <div>
            <div className="header">
                <h1>WelCome To Our Site Women</h1>
                <h3>Choose Your Dress and Take Your Dress</h3>
            </div>
            <div>
                <Products></Products>
            </div>
        </div>
    );
};

export default Header;
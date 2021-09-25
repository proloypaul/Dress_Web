import React from 'react';
import Products from '../Products/Products';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="header">
                <h1>WelCome To Our Site</h1>
            </div>
            <div>
                <Products></Products>
            </div>
        </div>
    );
};

export default Header;
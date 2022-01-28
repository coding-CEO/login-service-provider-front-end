import React from 'react';
import { Page } from '../../utils/Page';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className="navbarContainer">
            <h3 style={{ cursor: "pointer" }}
                onClick={() => Page.redirect(`/`)}>Login Service Provider</h3>
        </div>
    );
}

export default NavBar;

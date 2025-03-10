import React from 'react';

import Logo from '../../assets/logo.svg';

const Header = () => {
    return (
        <div className='header'>
            <nav className='header__nav'></nav>
            <img className='logo' src={Logo} alt='logo' />
            <div className='header__actions'></div>
        </div>
    );
};

export default Header;
import React from 'react';

const Header = () => {
    let publicUrl = process.env.PUBLIC_URL + '/'
    return (
        <div>
            <img className='nav-img-back' src={publicUrl + 'assets/img/header-img.png'} alt="logo" />
        </div>
    );
};
export default Header;
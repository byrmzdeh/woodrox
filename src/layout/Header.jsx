import React from 'react'

const Header = () => {
    return (
        <div className='header'>
            <div className='colorlib'>
                <img src="https://preview.colorlib.com/assets/img/logo.png" alt="err" />
                <div className='wood'><p>+ WOODROX</p></div>
            </div>

            <div className='view'>
                <div className='icon'><i class="fa-solid fa-desktop"></i></div>
                <div className='icon'><i class="fa-solid fa-tablet-screen-button"></i></div>
                <div className='icon'><i class="fa-solid fa-mobile-screen-button"></i></div>
                <div className='icon cart'><i class="fa-solid fa-cart-shopping"></i></div>
                <div className='icon'><i class="fa-solid fa-xmark"></i></div>

            </div>

        </div>
    )
}

export default Header

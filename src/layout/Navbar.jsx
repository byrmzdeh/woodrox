import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    // const barsDiv = document.querySelector('.bars');  
    // const handleToggleBars = () => {
    //   barsDiv.classList.toggle('barsshow');
    // };


    return (
        <div className='navbar'>
            <nav className='one'>
                <div className='visit'>
                    <div><p>Visit Us</p></div>
                    <div><p>Online Support</p></div>
                </div>
                <div className='icons'>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-dribbble"></i>
                    <i class="fa-brands fa-behance"></i>
                </div>
            </nav>
            <nav className='two'>
                <img src="https://preview.colorlib.com/theme/woodrox/img/logo.png" alt="err" />
                <ul>
                    <li><a href="/">HOME</a></li>
                    <li><a href="/about">ABOUT</a></li>

                    <li className='pages'><a href="/project">PAGES</a>
                        <div className='pagesmenu'>
                            <Link to='/project'>PROJECT</Link><hr />
                            <Link to='/projectDetails'>PROJECT DETAILS</Link><hr />
                            <Link to='/element'>ELEMENTS</Link><hr />

                        </div>
                    </li>

                    <li><a href="/contact">CONTACT</a></li>
                </ul>
                <div className='bars' >
                    <i class="fa-solid fa-bars"></i>
                    <ul>
                        <li>a</li>
                        <li>a</li>
                    </ul>
                </div>

            </nav>
        </div>
    )
}

export default Navbar

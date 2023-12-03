import React from 'react'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='about'>
                <h3>ABOUT ME</h3>
                <p>Do you want to be even more successful? Learn to love learning and <br /> growth. The more effort you put into improving your skills,</p>
                <p className='Copyright'>Copyright ©2023 All rights reserved | This template is made with  by</p>
                <p className='colorlib'>Colorlib</p>
            </div>

            <div className='news'>
                <h3>NEWSLETTER</h3>
                <p>Stay updated with our latest trends</p>
                <div className='input'>
                    <input type="text" placeholder='Email Address' />
                    <div className='rightdiv'>
                        <i class="fa-solid fa-right-long"></i>
                    </div>
                </div>
            </div>


            <div className='follow'>
                <h3>FOLLOW ME</h3>
                <p>Let us be social</p>
                <div className='icons'>
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-dribbble"></i>
                    <i class="fa-brands fa-behance"></i>
                </div>
            </div>

        </div>
    )
}

export default Footer

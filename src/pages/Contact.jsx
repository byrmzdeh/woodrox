import React from 'react'
import Navbar from '../layout/Navbar'

const Contact = () => {
    return (
        <>
            <Navbar />
            <div className='contact'>
                <section className='one'>
                    <h1>CONTACT US</h1>
                    <h2><a href="/">Home </a><i class="fa-solid fa-arrow-right"></i><a href="/about">Contact Us</a></h2>
                </section>

                <section className='two'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3871.2620905854656!2d49.68277780420856!3d40.569188837356606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4030912951555555%3A0xb1cd05019a2e6fbc!2zNTAgc2F5bMSxIFXFn2FxIEJhxJ_Dp2FzxLE!5e0!3m2!1sen!2saz!4v1701636925741!5m2!1sen!2saz" width="1300" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </section>

                <section className='three'>
                    <div className='location'>
                        <div className='cali'>
                            <i class="fa-solid fa-house"></i>
                            <div>
                                <h4>California, United States</h4>
                                <p>Santa monica bullevard</p>
                            </div>
                        </div>
                        <div className='cali'>
                            <i class="fa-solid fa-phone"></i>
                            <div>
                                <h4>00 (440) 9865 562 </h4>
                                <p>Monday to Frid 9am to 6 pm</p>
                            </div>
                        </div>
                        <div className='cali'>
                            <i class="fa-solid fa-message"></i>
                            <div>
                                <h4>support@colorlib.com</h4>
                                <p>Send us your query anytime!</p>
                            </div>
                        </div>
                    </div>


                    <div className='input'>
                        <input type="text" placeholder='Enter Your Name' />
                        <input type="text" placeholder='Enter Email Address' />
                        <input type="text" placeholder='Enter Subject' />
                    </div>

                    <div className='textarea'>
                        <textarea placeholder='Enter Messegae' id="" cols="30" rows="10"></textarea>
                        <button>Send Message</button>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Contact

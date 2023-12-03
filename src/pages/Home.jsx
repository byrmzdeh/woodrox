import React, { useRef, useState } from 'react';
import Navbar from '../layout/Navbar'
import Latest from '../components/Latest';
import Expert from '../components/Expert';
// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles


// import required modules
// import { Pagination } from 'swiper/modules';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className='home'>
                <section className='one'>
                    <div className="homeone">
                        <h2>PRECISE CONCEPT DESIGN <br />
                            FOR STYLISH LIVING</h2>
                        <p>If you are looking at blank cassettes on the web, you may be very confused at the <br /> difference in price. You may see some for as low as $.17 each.</p>
                        <button>Get Started</button>
                    </div>

                    <div className="hometwo">
                        <div className="card">
                            <i class="fa-solid fa-couch"></i>
                        </div>
                        <div className="card">
                            <i class="fa-solid fa-bed"></i>
                        </div>
                        <div className="card">
                            <i class="fa-solid fa-computer"></i>
                        </div>
                        <div className="card">
                            <i class="fa-solid fa-microchip"></i>
                        </div>
                        <div className="card">
                            <i class="fa-solid fa-restroom"></i>
                        </div>
                        <div className="card">
                            <i class="fa-solid fa-kitchen-set"></i>
                        </div>
                    </div>

                </section>

                <section className='two'>
                    <h1>MOST POPULAR FURNITURES</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna <br /> aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                    <div className='threecards'>
                        <div className="card">
                            <img src="https://preview.colorlib.com/theme/woodrox/img/furniture/furniture-1.jpg" alt="err" />
                            <h3>GREEN BUTTER SOFA</h3>
                            <p>Sony laptops are among the most well known laptops on <br /> today’s market. Sony is a name that.</p>
                        </div>
                        <div className="card">
                            <img src="https://preview.colorlib.com/theme/woodrox/img/furniture/furniture-2.jpg" alt="err" />
                            <h3>GREEN BUTTER SOFA</h3>
                            <p>Sony laptops are among the most well known laptops on <br /> today’s market. Sony is a name that.</p>
                        </div>
                        <div className="card">
                            <img src="https://preview.colorlib.com/theme/woodrox/img/furniture/furniture-3.jpg" alt="err" />
                            <h3>GREEN BUTTER SOFA</h3>
                            <p>Sony laptops are among the most well known laptops on <br /> today’s market. Sony is a name that.</p>
                        </div>
                    </div>


                </section>

                <Latest />
                <Expert />

                <section className='five'>
                    <h1>LOOKING FOR A <br />
                        QUALITY AND AFFORDABLE FURNITURE?</h1>
                    <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher <br /> conduct standards especially in the workplace.</p>
                    <button>READ DETAILS</button>
                </section>

                <section className='six'>
                    <h1>RECENT POSTS FROM OUR BLOG</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna <br /> aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                    <div className='threecards'>
                        <div className="card">
                            <img src="https://preview.colorlib.com/theme/woodrox/img/our-blog/our-blog-1.jpg" alt="err" />
                            <div className='buttons'>
                                <button className='travel'>Travel</button>
                                <button>Life style</button>
                            </div>
                            <h3>LOW COST ADVERTISING</h3>
                            <p>Acres of Diamonds… you’ve read the famous story,<br />or at least had it related to you A farmer.</p>
                            <p className='date'>31st January, 2018</p>
                        </div>
                        <div className="card">
                            <img src="https://preview.colorlib.com/theme/woodrox/img/our-blog/our-blog-2.jpg" alt="err" />
                            <div className='buttons'>
                                <button className='travel'>Travel</button>
                                <button>Life style</button>
                            </div>
                            <h3>LOW COST ADVERTISING</h3>
                            <p>Acres of Diamonds… you’ve read the famous story,<br />or at least had it related to you A farmer.</p>
                            <p className='date'>31st January, 2018</p>
                        </div>
                        <div className="card">
                            <img src="https://preview.colorlib.com/theme/woodrox/img/our-blog/our-blog-3.jpg" alt="err" />
                            <div className='buttons'>
                                <button className='travel'>Travel</button>
                                <button>Life style</button>
                            </div>
                            <h3>LOW COST ADVERTISING</h3>
                            <p>Acres of Diamonds… you’ve read the famous story,<br />or at least had it related to you A farmer.</p>
                            <p className='date'>31st January, 2018</p>
                        </div>
                    </div>


                </section>

                <section className='seven'>
                    <div className="picture">
                        <img src="https://preview.colorlib.com/theme/woodrox/img/clients-logo/c-logo-1.png" alt="err" />
                        <img src="https://preview.colorlib.com/theme/woodrox/img/clients-logo/c-logo-2.png" alt="err" />
                        <img src="https://preview.colorlib.com/theme/woodrox/img/clients-logo/c-logo-3.png" alt="err" />
                        <img src="https://preview.colorlib.com/theme/woodrox/img/clients-logo/c-logo-4.png" alt="err" />
                        <img src="https://preview.colorlib.com/theme/woodrox/img/clients-logo/c-logo-5.png" alt="err" />
                    </div>
                </section>

                {/* <section className="nine">
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>Slide 1</SwiperSlide>
                        <SwiperSlide>Slide 2</SwiperSlide>
                        <SwiperSlide>Slide 3</SwiperSlide>
                        <SwiperSlide>Slide 4</SwiperSlide>
                        <SwiperSlide>Slide 5</SwiperSlide>
                        <SwiperSlide>Slide 6</SwiperSlide>
                        <SwiperSlide>Slide 7</SwiperSlide>
                        <SwiperSlide>Slide 8</SwiperSlide>
                        <SwiperSlide>Slide 9</SwiperSlide>
                    </Swiper>
                </section> */}

            </div>
        </>
    )
}

export default Home

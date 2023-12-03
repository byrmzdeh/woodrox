import React from 'react'
import Navbar from '../layout/Navbar'
import Latest from '../components/Latest'
import Expert from '../components/Expert'

const About = () => {
    return (
        <>
            <Navbar />

            <div className='about'>
                <section className='one'>
                    <h1>ABOUT US</h1>
                    <h2><a href="/">Home </a><i class="fa-solid fa-arrow-right"></i><a href="/about">About Us</a></h2>
                </section>

                <section className='two'>
                    <div>
                        <h5>BRAND NEW APP TO BLOW YOUR MIND</h5>
                        <h1>WE’VE MADE A LIFE <br />
                            THAT WILL CHANGE YOU</h1>
                        <h4>We are here to listen from you deliver exellence</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temp or <br />
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
                        <button>GET STARTED NOW</button>
                    </div>
                    <img src="https://preview.colorlib.com/theme/woodrox/img/about-1.jpg" alt="err" />

                </section>

                <Latest />

                <Expert />



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

export default About

import React from 'react'
import Navbar from '../layout/Navbar'

const ProjectDetails = () => {
    return (
        <>
            <Navbar />
            <div className='projectdetails'>
                <section className='one'>
                    <h1>PROJECT DETAILS</h1>
                    <h2><a href="/">Home </a><i class="fa-solid fa-arrow-right"></i><a href="/project">Project</a><i class="fa-solid fa-arrow-right"></i><a href="/projectdetails">Project Details </a></h2>
                </section>

                <section className='two'>
                    <div className='image'>
                        <img src="https://preview.colorlib.com/theme/woodrox/img/project-details-1.jpg" alt="err" />
                        <div>
                            <h2>LAVENDAR AMBIENT COLORLIB</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <br />  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br />  veniam, quis nostrud exercitation.</p>
                            <p>Rating <span><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></span></p>
                            <p>Client <span>: colorlib</span></p>
                            <p>Website <span>: colorlib.com</span></p>
                            <p>Completed <span>: 17 Aug 2018</span></p>
                        </div>

                    </div>
                    <div >
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation <br /> ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
                        <p>Voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut <br /> perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae <br /> vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi <br /> nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam <br /> aliquam quaerat voluptatem.</p>
                    </div>

                </section>
            </div>
        </>
    )
}

export default ProjectDetails

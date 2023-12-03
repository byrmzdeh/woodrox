import React from 'react'
import Navbar from '../layout/Navbar'
import Latest from '../components/Latest'

const Project = () => {
    return (
        <>
            <Navbar />
            <div className='project'>
                <section className='one'>
                    <h1>PROJECTS</h1>
                    <h2><a href="/">Home </a><i class="fa-solid fa-arrow-right"></i><a href="/project">Projects</a></h2>
                </section>

                <div className='latestWrite'>
                    <h1>LATEST COMPLETED PROJECTS</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna <br />
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                </div>

                <Latest />
            </div>
        </>
    )
}

export default Project

import React from 'react'
import BgImageTag from '../BgImageTag'

function HomePage() {
    return (
        <div className=''>
            <div className='' style={{ height: '50vh', width: '100vw', position: 'relative' }}>
                <div className='' style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 1 }}>
                    <div className='text-white text-center font50 bold'>Building Your Future</div>
                    <div className='text-center text-white font18'>We deliver high-quality construction services with integrity and professionalism.</div>
                </div>
                <BgImageTag src={"/Images/construction.jpg"} alt='construction' layout='fill' />
            </div>
            <div className='container-fluid'>
                <div className='text-center py-5'>
                    <h1>About Us</h1>
                    <div className='d-flex justify-content-center'>
                        <p className='col-md-6'>With over 20 years of experience, BuildHomeFine is a trusted name in the construction industry. We specialize in residential, commercial, and industrial projects.</p>
                    </div>
                </div>
                <div className='text-center py-5 bg-light'>
                    <h1>Our Services</h1>
                    <div className='d-flex justify-content-between'>
                        <div className='col-md-3 bg-white p-3 m-2 shadow-md rounded text-center'>
                            <h2>Residential</h2>
                            <p>We build custom homes that reflect your style and needs.</p>
                        </div>
                        <div className='col-md-3 col-md-3 bg-white p-3 m-2 shadow-md rounded text-center'>
                            <h2>Commercial</h2>
                            <p>We provide construction services for offices, retail spaces, and more.</p>
                        </div>
                        <div className='col-md-3 col-md-3 bg-white p-3 m-2 shadow-md rounded text-center'>
                            <h2>Industrial</h2>
                            <p>We handle large-scale industrial projects with precision and expertise.</p>
                        </div>
                    </div>
                </div>
                <div className='text-center py-5'>
                    <h1>Our Projects</h1>
                    <div className='d-flex justify-content-between'>
                        <div className='col-md-3 text-center'>
                            <p>Modern Office Building</p>
                        </div>
                        <div className='col-md-3 col-md-3 text-center'>
                            <p>Luxury Villa</p>
                        </div>
                        <div className='col-md-3 col-md-3 text-center'>
                            <p>Industrial Complex</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage

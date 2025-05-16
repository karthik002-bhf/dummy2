import React from 'react'
import Image from 'next/image'

function HomePage() {
    return (
        <div className=''>
            <div style={{ backgroundImage: 'url(/Images/photo-collage.png.png)', backgroundSize: 'cover', backgroundPosition: 'center', height: '70vh', textAlign: 'center' }}>
                <div className='overlay' style={{ width: '100%', height: '60%', position: 'absolute', top: '60%' }}>
                    <div style={{ position: 'relative', zIndex: 1, color: '#FFF', backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '2rem' }}>
                        <div className='text-white text-center font32 bold'>Building Your Future</div>
                        <div className='text-center text-white font18'>We deliver high-quality construction services with integrity and professionalism.</div>
                    </div>
                </div>
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
                    <div className='col-md-12 row mx-0 d-flex justify-content-between'>
                        <div className='col-md-4 bg-white p-1'>
                            <div className='m-1 shadow-md rounded text-center'>
                                <div className='img_div'>
                                    <Image src={"/Images/Home/Residential_homes.jpeg"} alt='Residential_homes' fill className='img_css' priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                                </div>
                                <h2>Residential</h2>
                                <p>We build custom homes that reflect your style and needs.</p>
                            </div>
                        </div>
                        <div className='col-md-4 col-md-3 bg-white p-1'>
                            <div className='m-1 shadow-md rounded text-center'>
                                <div className='img_div'>
                                    <Image src={"/Images/Home/Commercial_office.jpeg"} alt='Commercial_office' fill className='img_css' priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                                </div>
                                <h2>Commercial</h2>
                                <p>We provide construction services for offices, retail spaces, and more.</p>
                            </div>
                        </div>
                        <div className='col-md-4 col-md-3 bg-white p-1'>
                            <div className='m-1 shadow-md rounded text-center'>
                                <div className='img_div'>
                                    <Image src={"/Images/Home/Industrial.jpeg"} alt='Industrial' fill className='img_css' priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                                </div>
                                <h2>Industrial</h2>
                                <p>We handle large-scale industrial projects with precision and expertise.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-center py-5'>
                    <h1>Our Projects</h1>
                    <div className='col-md-12 row mx-0 d-flex justify-content-between'>
                        <div className='col-md-4 text-center'>
                            <div className='img_div'>
                                <Image src={"/Images/Home/Modern_Office_Building.jpeg"} alt='Modern_Office_Building' fill className='img_css' priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                            </div>
                            <h4>Modern Office Building</h4>
                        </div>
                        <div className='col-md-4 text-center'>
                            <div className='img_div'>
                                <Image src={"/Images/Home/Luxury_Villa.jpeg"} alt='Luxury_Villa' fill className='img_css' priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                            </div>
                            <h4>Luxury Villa</h4>
                        </div>
                        <div className='col-md-4 text-center'>
                            <div className='img_div'>
                                <Image src={"/Images/Home/Industrial_Complex.jpeg"} alt='Industrial_Complex' fill className='img_css' priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                            </div>
                            <h4>Industrial Complex</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default HomePage

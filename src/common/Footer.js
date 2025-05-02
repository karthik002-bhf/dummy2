import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';

function Footer() {
    return (
        <div className='navbg p-4'>
            <div className='container'>
                <div className='col-md-12 row mx-0 d-flex justify-content-center'>
                    <div className='col-md-6'>
                        <h5>Services</h5>
                        <div className='col-md-12 row mx-0'>
                            <div className='col-md-6'>
                                <Link href="/DesignServices" className='footer_link'>Design Services</Link> <br />
                                <Link href="/PMC" className='footer_link'>Project Management Consultant</Link> <br />
                                <Link href="/LabTest" className='footer_link'>Laboratory Testing</Link> <br />
                                <Link href="/Interiors" className='footer_link'>Interiors Design</Link>
                            </div>
                            <div className='col-md-6'>
                                <Link href="/Waterproof" className='footer_link' >Waterproofing</Link> <br />
                                <Link href="/RepairAndRenovations" className='footer_link'>Repair & Renovation</Link> <br />
                                <Link href="/Painting" className='footer_link'>Painting</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <h5>Company</h5>
                        <Link href="/" className='footer_link'>About Us</Link> <br />
                        <Link href="/" className='footer_link'>Our Process</Link> <br />
                        <Link href="/" className='footer_link'>Testimonials</Link> <br />
                        <Link href="/" className='footer_link'>Contact Us</Link>
                    </div>
                    <div className='col-md-3'>
                        <h5>Follow Us</h5>
                        <div className='d-flex gap-2'>
                            <Link href="#" className='footer_link'>
                                <FacebookIcon />
                            </Link>
                            <Link href="#" className='footer_link'>
                                <TwitterIcon />
                            </Link>
                            <Link href="#" className='footer_link'>
                                <InstagramIcon />
                            </Link>
                            <Link href="#" className='footer_link'>
                                <LinkedInIcon />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='text-center mt-4 font14'>
                    <div>© {new Date().getFullYear()} All rights reserved.</div>
                    <div>Powered by BHF Constructions</div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
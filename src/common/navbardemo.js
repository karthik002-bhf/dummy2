'use client'
import AuthModal from '@/app/Auth/LoginSignup';
import Logout from '@/app/Auth/Logout';
import Cookies from 'js-cookie';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function NavbarDemo() {
  // const [isMobile, setIsMobile] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = Cookies.get('auth_token');
    setIsLoggedIn(!!token);
  }, []);

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const handleResize = () => {
  //       setIsMobile(window.innerWidth < 768);
  //     };
  //     handleResize();
  //     window.addEventListener('resize', handleResize);
  //     return () => window.removeEventListener('resize', handleResize);
  //   }
  // }, []);


  // const handleAuthClick = ()=>{
  //   if (Cookies.get('auth_token')) {
  //     Cookies.remove('auth_token', { path: '/' });
  //     setExpanded(false);
  //     window.location.href = '/';
  //   } else {
  //     // window.location.href = '/';
  //   }
  // }



  return (
    <Navbar expand="lg" className="nav navbg" sticky='top' expanded={expanded} onToggle={() => setExpanded(!expanded)}>
      <Container fluid>
        <Navbar.Brand href="/">
          <div className='d-flex'>
            <span style={{ borderRadius: '70%', overflow: 'hidden' }} className='my-auto mx-1'>
              <Image src={"/Images/BHF_logo.jpg"} alt='' className='' width={50} height={50} />
            </span>
            <span className='my-auto mx-1 fw-bold' /*style={{ display: isMobile ? '' : 'block' }}*/ >BuildHomesFine</span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='d-lg-flex justify-content-sm-end text-sm-end'>
          <Nav className="my-1 my-lg-0 ">
            <Nav.Link className='nav_link fw-bold' href="/Shop">E-mart</Nav.Link>
            {/* <NavDropdown title="E-Mart" id="E-Mart" className="nav_link  hover-dropdown fw-bold dropdown_css px-md-1">
              <NavDropdown.Item href="/Tiles" className='' onClick={() => setExpanded(false)}>Tiles</NavDropdown.Item>
              <NavDropdown.Item href="/Plumbing" className='' onClick={() => setExpanded(false)}>Plumbing</NavDropdown.Item>
              <NavDropdown.Item href="/Sanitary" className='' onClick={() => setExpanded(false)}>Sanitary</NavDropdown.Item>
              <NavDropdown.Item href="/Cement" className='' onClick={() => setExpanded(false)}>Cement </NavDropdown.Item>
              <NavDropdown.Item href="/Steel" className='' onClick={() => setExpanded(false)}>Steel</NavDropdown.Item>
              <NavDropdown.Item href="/Blocks" className='' onClick={() => setExpanded(false)}>Blocks </NavDropdown.Item>
              <NavDropdown.Item href="/Construction Chemical" className='' onClick={() => setExpanded(false)}> Construction Chemicals</NavDropdown.Item>
              <NavDropdown.Item href="/Aggregates" className='' onClick={() => setExpanded(false)}> Aggregates </NavDropdown.Item>
            </NavDropdown> */}

            <Nav.Link className=' hover-dropdown fw-bold px-md-1 text-sm-end' href="/DesignBuild" onClick={() => setExpanded(false)}>Design Build</Nav.Link>

            <NavDropdown title="Construction Tech Services" id="Construction Tech Service" className="nav_link hover-dropdown  fw-bold dropdown_css px-md-1">
              <NavDropdown.Item href="/DesignServices" className='' onClick={() => setExpanded(false)}>Design Services</NavDropdown.Item>
              <NavDropdown.Item href="/PMC" className='' onClick={() => setExpanded(false)}>Project Management Consultant</NavDropdown.Item>
              <NavDropdown.Item href="/LabTest" className='' onClick={() => setExpanded(false)}>Laboratory Testing</NavDropdown.Item>
              <NavDropdown.Item href="/Interiors" className='' onClick={() => setExpanded(false)}>Interiors Design</NavDropdown.Item>
              <NavDropdown.Item href="/Waterproof" className='' onClick={() => setExpanded(false)}>Waterproofing</NavDropdown.Item>
              <NavDropdown.Item href="/RepairAndRenovations" className='' onClick={() => setExpanded(false)}>Repair & Renovation</NavDropdown.Item>
              <NavDropdown.Item href="/Painting" className='' onClick={() => setExpanded(false)}>Painting</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Contract & Other Services" id="Contract & Other Services" className=" hover-dropdown nav_link fw-bold px-md-1">
              <NavDropdown.Item href="/" onClick={() => setExpanded(false)}>Service 4</NavDropdown.Item>
              <NavDropdown.Item href="/" onClick={() => setExpanded(false)}>Service 5</NavDropdown.Item>
              <NavDropdown.Item href="/" onClick={() => setExpanded(false)}>Service 6</NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link className='nav_link fw-bold' href="#action6">Contract & Other Services</Nav.Link> */}
            <Nav.Link className='nav_link fw-bold px-md-1 text-sm-end my-auto' href="/" onClick={() => setExpanded(false)}>Contact</Nav.Link>
            {/* {
              Cookies.get('auth_token') ?
                <Nav.Link className='nav_link fw-bold px-md-1 text-sm-end my-auto' href="/Logout" onClick={() => setExpanded(false)}>Logout</Nav.Link>
                :
                <Nav.Link className='nav_link fw-bold px-md-1 text-sm-end my-auto' href="/Login" onClick={() => setExpanded(false)}>Login</Nav.Link>
            } */}
            {/* <Nav.Link className='nav_link fw-bold px-md-1 text-sm-end my-auto' href={Cookies.get('auth_token') ? '/Logout' : '/Login'} onClick={() => setExpanded(false)}>{Cookies.get('auth_token') ? 'Logout' : 'Login'}</Nav.Link> */}
            <Nav.Item className='nav_link fw-bold px-md-1 text-sm-end my-auto cp' /*onClick={handleAuthClick} */ >{isLoggedIn ? <Logout /> : <AuthModal />}</Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarDemo;
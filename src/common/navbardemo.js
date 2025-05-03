'use client'
import Image from 'next/image';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function NavbarDemo() {
  return (
    <Navbar expand="lg" className="nav navbg" sticky='top'>
      <Container fluid>
        <Navbar.Brand href="/">
          <div className='d-flex'>
            <span style={{ borderRadius: '70%', overflow: 'hidden' }} className='my-auto mx-1'>
              <Image src={"/Images/BHF_logo.jpg"} alt='' className='' width={50} height={50} />
            </span>
            <span className='my-auto mx-1'>BuildHomesFine</span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='d-flex justify-content-end'>
          <Nav
            className=" my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <Nav.Link className='nav_link fw-bold' href="#action2">Home</Nav.Link> */}
              <NavDropdown title="E-Mart" id="E-Mart" className="nav_link hover-dropdown fw-bold dropdown_css">
                <NavDropdown.Item href="/Tiles" className='drop_item'>Tiles</NavDropdown.Item>
                <NavDropdown.Item href="/" className='drop_item'>Plumbing</NavDropdown.Item>
                <NavDropdown.Item href="/" className='drop_item'>Sanitary</NavDropdown.Item>
                <NavDropdown.Item href="/" className='drop_item'>cement </NavDropdown.Item>
                <NavDropdown.Item href="/" className='drop_item'>steel</NavDropdown.Item>
                <NavDropdown.Item href="/" className='drop_item'>blocks </NavDropdown.Item>
                <NavDropdown.Item href="/" className='drop_item'> Construction Chemicals</NavDropdown.Item>
                <NavDropdown.Item href="/" className='drop_item'> Aggregates </NavDropdown.Item>
              </NavDropdown>
              {/* <Nav.Link className='nav_link fw-bold' href="#action1">Construction</Nav.Link> */}
              <NavDropdown title="Construction Tech Services" id="Construction Tech Service" className="nav_link hover-dropdown  fw-bold dropdown_css">
                <NavDropdown.Item href="/DesignServices" className='drop_item'>Design Services</NavDropdown.Item>
                <NavDropdown.Item href="/PMC" className='drop_item'>Project Management Consultant</NavDropdown.Item>
                <NavDropdown.Item href="/LabTest" className='drop_item'>Laboratory Testing</NavDropdown.Item>
                <NavDropdown.Item href="/Interiors" className='drop_item'>Interiors Design</NavDropdown.Item>
                <NavDropdown.Item href="/Waterproof" className='drop_item'>Waterproofing</NavDropdown.Item>
                <NavDropdown.Item href="/RepairAndRenovations" className='drop_item'>Repair & Renovation</NavDropdown.Item>
                <NavDropdown.Item href="/Painting" className='drop_item'>Painting</NavDropdown.Item>
              </NavDropdown>
              {/* <Nav.Link className='nav_link fw-bold' href="#action5">Construction Tech Services</Nav.Link> */}
              <NavDropdown title="Contract & Other Services" id="Contract & Other Services" className="hover-dropdown nav_link fw-bold">
                <NavDropdown.Item href="/">Service 4</NavDropdown.Item>
                <NavDropdown.Item href="/">Service 5</NavDropdown.Item>
                <NavDropdown.Item href="/">Service 6</NavDropdown.Item>
              </NavDropdown>
              {/* <Nav.Link className='nav_link fw-bold' href="#action6">Contract & Other Services</Nav.Link> */}
              <Nav.Link className='nav_link fw-bold' href="/">Contact</Nav.Link>



            </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        );
}

        export default NavbarDemo;
import Image from 'next/image';
import { NavbarBrand, NavbarCollapse, NavbarToggle, NavLink } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarDemo() {
  return (
    <Navbar expand="lg" className="nav navbg" sticky='top'>
      <Container>
        <NavbarBrand href="#">
          <div className='d-flex'>
            <span style={{ borderRadius: '70%', overflow: 'hidden' }} className='my-auto mx-1'>
              <Image src={"/Images/BHF_logo.jpg"} alt='' className='' width={70} height={70} />
            </span>
            <span className='my-auto mx-1'>BuildHomesFine</span>
          </div>
        </NavbarBrand>
        <NavbarToggle aria-controls="navbarScroll" />
        <NavbarCollapse id="navbarScroll" className='d-flex justify-content-end'>
          <Nav
            className=" my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* <NavLink className='navlink' href="#action2">Home</NavLink> */}
            {/* <NavLink className='navlink' href="#action4">E-Mart</NavLink> */}
            {/* <NavLink className='navlink' href="#action1">Construction</NavLink> */}
            <NavLink className='navlink' href="#action5">Construction Tech Services</NavLink>
            <NavLink className='navlink' href="#action6">Contract & Other Services</NavLink>
            <NavLink className='navlink' href="/product">Contact</NavLink>

            <NavDropdown title="Services" id="services-dropdown" className="hover-dropdown">
              <NavDropdown.Item href="/">Service 1</NavDropdown.Item>
              <NavDropdown.Item href="/">Service 2</NavDropdown.Item>
              <NavDropdown.Item href="/">Service 3</NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
}

export default NavbarDemo;
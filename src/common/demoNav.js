'use client';

import { useState, useEffect } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function DemoNav() {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
      };
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <Navbar
      expand="lg"
      className="nav navbg"
      sticky="top"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >
      <Container fluid>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <span style={{ borderRadius: '70%', overflow: 'hidden' }} className="me-2">
            <Image src="/Images/BHF_logo.jpg" alt="Logo" width={50} height={50} />
          </span>
          {!isMobile && <span className="fw-bold">BuildHomesFine</span>}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav className="my-2 my-lg-0" navbarScroll>
            <NavDropdown title="E-Mart" id="emart-dropdown">
              {['Tiles', 'Plumbing', 'Sanitary', 'Cement', 'Steel', 'Blocks', 'Construction Chemical', 'Aggregates'].map((item) => (
                <NavDropdown.Item key={item} href={`/${item.replace(/\s+/g, '')}`} onClick={() => setExpanded(false)}>
                  {item}
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            <Nav.Link href="/DesignBuild" onClick={() => setExpanded(false)}>
              Design Build
            </Nav.Link>

            <NavDropdown title="Construction Tech Services" id="construction-dropdown">
              {[
                ['DesignServices', 'Design Services'],
                ['PMC', 'Project Management Consultant'],
                ['LabTest', 'Laboratory Testing'],
                ['Interiors', 'Interiors Design'],
                ['Waterproof', 'Waterproofing'],
                ['RepairAndRenovations', 'Repair & Renovation'],
                ['Painting', 'Painting'],
              ].map(([href, label]) => (
                <NavDropdown.Item key={href} href={`/${href}`} onClick={() => setExpanded(false)}>
                  {label}
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            <NavDropdown title="Contract & Other Services" id="contract-dropdown">
              {['Service 4', 'Service 5', 'Service 6'].map((label, index) => (
                <NavDropdown.Item key={index} href="/" onClick={() => setExpanded(false)}>
                  {label}
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            <Nav.Link href="/" onClick={() => setExpanded(false)}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

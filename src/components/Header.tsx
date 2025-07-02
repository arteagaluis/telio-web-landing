import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Button } from 'react-bootstrap';
import { FiMenu, FiX } from 'react-icons/fi';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={scrolled ? 'bg-white shadow-sm py-2' : 'py-3'}
    >
      <Container>
        <Navbar.Brand href="#home" className="fw-bold text-primary">
          WebPro
        </Navbar.Brand>
        
        <div 
          className="d-lg-none menu-toggle" 
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>
        
        <Navbar.Collapse in={mobileMenu} className={mobileMenu ? 'show' : ''}>
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="mx-2">Inicio</Nav.Link>
            <Nav.Link href="#services" className="mx-2">Servicios</Nav.Link>
            <Nav.Link href="#portfolio" className="mx-2">Portafolio</Nav.Link>
            <Nav.Link href="#testimonials" className="mx-2">Clientes</Nav.Link>
            <Nav.Link href="#contact" className="mx-2">Contacto</Nav.Link>
          </Nav>
          <Button 
            variant="primary" 
            className="ms-lg-3 mt-3 mt-lg-0"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Cotizar Ahora
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
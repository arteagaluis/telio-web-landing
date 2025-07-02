import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiYoutube } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <Container>
        <Row>
          <Col md={4} className="mb-4 mb-md-0">
            <h4 className="fw-bold text-primary mb-3">WebPro</h4>
            <p className="text-light">
              Creando experiencias digitales excepcionales para impulsar tu negocio en el mundo online.
            </p>
            <div className="d-flex gap-3 mt-4">
              <a href="#" className="text-white fs-5"><FiFacebook /></a>
              <a href="#" className="text-white fs-5"><FiTwitter /></a>
              <a href="#" className="text-white fs-5"><FiInstagram /></a>
              <a href="#" className="text-white fs-5"><FiLinkedin /></a>
              <a href="#" className="text-white fs-5"><FiYoutube /></a>
            </div>
          </Col>
          
          <Col md={4} className="mb-4 mb-md-0">
            <h5 className="mb-4">Enlaces Rápidos</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#home" className="text-light text-decoration-none">Inicio</a></li>
              <li className="mb-2"><a href="#services" className="text-light text-decoration-none">Servicios</a></li>
              <li className="mb-2"><a href="#portfolio" className="text-light text-decoration-none">Portafolio</a></li>
              <li className="mb-2"><a href="#testimonials" className="text-light text-decoration-none">Testimonios</a></li>
              <li><a href="#contact" className="text-light text-decoration-none">Contacto</a></li>
            </ul>
          </Col>
          
          <Col md={4}>
            <h5 className="mb-4">Suscríbete</h5>
            <p className="text-light">
              Recibe consejos y ofertas exclusivas para tu negocio digital
            </p>
            <div className="input-group mb-3">
              <input 
                type="email" 
                className="form-control" 
                placeholder="Tu email" 
                aria-label="Email" 
              />
              <button className="btn btn-primary" type="button">
                Suscribir
              </button>
            </div>
          </Col>
        </Row>
        
        <hr className="my-4 bg-light" />
        
        <Row>
          <Col md={6} className="mb-3 mb-md-0">
            <p className="mb-0 text-light">
              &copy; {currentYear} WebPro. Todos los derechos reservados.
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <a href="#" className="text-light text-decoration-none me-3">Términos y Condiciones</a>
            <a href="#" className="text-light text-decoration-none">Política de Privacidad</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
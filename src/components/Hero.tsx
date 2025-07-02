import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FiArrowRight } from 'react-icons/fi';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="d-flex align-items-center" 
      style={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #4361ee 0%, #3a0ca3 100%)' 
      }}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="text-white mb-5 mb-lg-0">
            <h1 className="display-3 fw-bold mb-4">
              Impulsa tu negocio con un sitio web profesional
            </h1>
            <p className="lead mb-5">
              Creamos experiencias digitales que cautivan a tus clientes y aumentan tus ventas
            </p>
            <div className="d-flex flex-wrap gap-3">
              <Button 
                variant="light" 
                size="lg" 
                className="d-flex align-items-center"
                onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
              >
                Ver trabajos <FiArrowRight className="ms-2" />
              </Button>
              <Button 
                variant="outline-light" 
                size="lg"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Contactar ahora
              </Button>
            </div>
          </Col>
          <Col lg={6} className="text-center">
            <div className="position-relative">
              <div className="position-absolute top-0 start-0 bg-warning rounded-circle" style={{ width: '150px', height: '150px', zIndex: '-1', opacity: '0.3' }}></div>
              <div className="position-absolute bottom-0 end-0 bg-danger rounded-circle" style={{ width: '200px', height: '200px', zIndex: '-1', opacity: '0.2' }}></div>
              <div className="bg-white p-4 rounded shadow-lg" style={{ transform: 'rotate(3deg)' }}>
                <div className="bg-light border rounded p-3" style={{ transform: 'rotate(-3deg)' }}>
                  <div className="ratio ratio-16x9 bg-dark rounded overflow-hidden">
                    <div className="d-flex justify-content-center align-items-center h-100 text-white">
                      <h3>Demo de Sitio Web</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
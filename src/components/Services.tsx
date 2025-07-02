import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FiLayout, FiSmartphone, FiShoppingCart, FiBarChart2, FiSearch, FiServer } from 'react-icons/fi';

const Services = () => {
  const services = [
    {
      icon: <FiLayout size={48} />,
      title: "Diseño Web Personalizado",
      description: "Sitios únicos adaptados a la identidad de tu marca"
    },
    {
      icon: <FiSmartphone size={48} />,
      title: "Diseño Responsive",
      description: "Perfecta visualización en todos los dispositivos"
    },
    {
      icon: <FiShoppingCart size={48} />,
      title: "Tiendas Online",
      description: "E-commerce con pasarelas de pago integradas"
    },
    {
      icon: <FiBarChart2 size={48} />,
      title: "Landing Pages",
      description: "Conversión optimizada para campañas de marketing"
    },
    {
      icon: <FiSearch size={48} />,
      title: "SEO Avanzado",
      description: "Posicionamiento en los primeros lugares de Google"
    },
    {
      icon: <FiServer size={48} />,
      title: "Mantenimiento Web",
      description: "Soporte técnico y actualizaciones constantes"
    }
  ];

  return (
    <section id="services" className="bg-light">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title display-5 fw-bold">Nuestros Servicios</h2>
          <p className="lead text-muted">Soluciones digitales para hacer crecer tu negocio</p>
        </div>
        
        <Row>
          {services.map((service, index) => (
            <Col md={6} lg={4} className="mb-4" key={index}>
              <div className="card h-100 border-0 shadow-sm hover-shadow">
                <div className="card-body p-4 text-center">
                  <div className="text-primary mb-4">{service.icon}</div>
                  <h5 className="card-title fw-bold">{service.title}</h5>
                  <p className="card-text text-muted">{service.description}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
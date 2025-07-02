"use client";
import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('todos');
  
  const projects = [
    {
      category: 'ecommerce',
      title: 'Tienda de Ropa',
      description: 'E-commerce con carrito de compras y pasarela de pagos'
    },
    {
      category: 'landing',
      title: 'Aplicación Fintech',
      description: 'Landing page para lanzamiento de app financiera'
    },
    {
      category: 'corporativo',
      title: 'Sitio Corporativo',
      description: 'Web institucional para empresa de servicios'
    },
    {
      category: 'ecommerce',
      title: 'Tienda de Electrónicos',
      description: 'Catálogo de productos con sistema de inventario'
    },
    {
      category: 'landing',
      title: 'Campaña Educativa',
      description: 'Landing page para curso online con alta conversión'
    },
    {
      category: 'corporativo',
      title: 'Portal Noticioso',
      description: 'Medio digital con sistema de suscripciones'
    }
  ];

  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title display-5 fw-bold">Portafolio</h2>
          <p className="lead text-muted">Algunos de nuestros trabajos destacados</p>
        </div>
        
        <div className="d-flex justify-content-center mb-5 flex-wrap">
          {['todos', 'ecommerce', 'landing', 'corporativo'].map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? 'primary' : 'outline-primary'}
              className="mx-2 mb-2 text-capitalize"
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>
        
        <Row className="g-4">
          {filteredProjects.map((project, index) => (
            <Col md={6} lg={4} key={index}>
              <div className="portfolio-item card border-0 overflow-hidden">
                <div className="position-relative">
                  <div 
                    className="portfolio-img bg-secondary" 
                    style={{ 
                      height: '250px',
                    //   background: `linear-gradient(45deg, #${Math.floor(Math.random()*16777215).toString(16)}, #${Math.floor(Math.random()*16777215).toString(16)})`
                    }}
                  ></div>
                  <div className="portfolio-overlay position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-70 d-flex align-items-center justify-content-center">
                    <div className="text-center p-3">
                      <h5 className="text-white mb-2">{project.title}</h5>
                      <p className="text-light mb-3">{project.description}</p>
                      <div>
                        <Button variant="light" className="me-2">
                          <FiExternalLink />
                        </Button>
                        <Button variant="outline-light">
                          <FiGithub />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
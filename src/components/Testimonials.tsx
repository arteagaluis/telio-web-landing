import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Mendoza",
      company: "Restaurante La Tradición",
      content: "Mi sitio web ha aumentado las reservas en un 40%. El diseño es moderno y atrae a nuevos clientes constantemente.",
      rating: 5
    },
    {
      name: "Ana Valdez",
      company: "Boutique Elegance",
      content: "La tienda online superó mis expectativas. Fácil de administrar y con un excelente soporte técnico.",
      rating: 5
    },
    {
      name: "Roberto Jiménez",
      company: "Consultoría Financiera RJ",
      content: "Profesionales que entienden las necesidades del negocio. Entrega puntual y resultados visibles.",
      rating: 4
    }
  ];

  return (
    <section id="testimonials" className="bg-dark text-white">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title display-5 fw-bold">Lo que dicen nuestros clientes</h2>
          <p className="lead">Experiencias reales con nuestros servicios</p>
        </div>
        
        <Carousel indicators={false} interval={5000}>
          {testimonials.map((testimonial, index) => (
            <Carousel.Item key={index}>
              <Row className="justify-content-center">
                <Col md={8} className="text-center">
                  <FaQuoteLeft className="display-1 text-primary mb-4" />
                  <p className="lead fst-italic mb-4">"{testimonial.content}"</p>
                  <div className="d-flex justify-content-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i} 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="24" 
                        height="24" 
                        fill={i < testimonial.rating ? "#FFD700" : "#6C757D"} 
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                      </svg>
                    ))}
                  </div>
                  <h5 className="fw-bold mb-1">{testimonial.name}</h5>
                  <p className="text-muted">{testimonial.company}</p>
                </Col>
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default Testimonials;
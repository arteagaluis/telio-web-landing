import React, { useState, FC } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FiSend, FiMapPin, FiPhone, FiMail, FiMessageSquare } from 'react-icons/fi';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const Contact: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string | null>>({});
  
  const validate = (): Record<string, string> => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Nombre requerido';
    if (!formData.email.trim()) {
      newErrors.email = 'Email requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    if (!formData.message.trim()) newErrors.message = 'Mensaje requerido';
    
    return newErrors;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const validationErrors = validate();
    
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Construir mensaje para WhatsApp
    const whatsappMessage =
      `*Nuevo contacto desde la web:*%0A%0A` +
      `*Nombre:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Teléfono:* ${formData.phone || 'No proporcionado'}%0A` +
      `*Servicio de interés:* ${formData.service || 'No especificado'}%0A` +
      `*Mensaje:* ${formData.message}`;

    // Número de WhatsApp - REEMPLAZA CON TU NÚMERO!
    const phoneNumber: string = "573123757222"; // Formato internacional sin espacios
    
    // Abrir WhatsApp
    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, '_blank');

    // Opcional: Enviar copia por correo
    const emailSubject: string = `Nuevo contacto: ${formData.name}`;
    const emailBody:
      string =
        `Nombre: ${formData.name}\n` +
        `Email: ${formData.email}\n` +
        `Teléfono: ${formData.phone || 'No proporcionado'}\n` +
        `Servicio: ${formData.service || 'No especificado'}\n` +
        `Mensaje:\n${formData.message}`;
    
   window.location.href = 
     `mailto:danielarteaga689@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

   // Restablecer formulario y mostrar mensaje de éxito
   setSubmitted(true);
   setFormData({
     name: '',
     email: '',
     phone: '',
     service: '',
     message: ''
   });
 };

 return (
    <section id="contact">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title display-5 fw-bold">Contáctanos</h2>
          <p className="lead text-muted">¿Listo para comenzar tu proyecto? Escríbenos</p>
        </div>
        
        <Row>
          <Col lg={6} className="mb-5 mb-lg-0">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <h3 className="mb-4">Información de Contacto</h3>
                
                <div className="d-flex mb-4">
                  <div className="me-3 text-primary">
                    <FiMapPin size={24} />
                  </div>
                  <div>
                    <h5>Ubicación</h5>
                    <p className="mb-0">Av. Principal 123, Ciudad, País</p>
                  </div>
                </div>
                
                <div className="d-flex mb-4">
                  <div className="me-3 text-primary">
                    <FiPhone size={24} />
                  </div>
                  <div>
                    <h5>Teléfono</h5>
                    <p className="mb-0">+1 (123) 456-7890</p>
                  </div>
                </div>
                
                <div className="d-flex">
                  <div className="me-3 text-primary">
                    <FiMail size={24} />
                  </div>
                  <div>
                    <h5>Email</h5>
                    <p className="mb-0">contacto@webpro.com</p>
                  </div>
                </div>
                
                <div className="d-flex mt-4">
                  <div className="me-3 text-primary">
                    <FiMessageSquare size={24} />
                  </div>
                  <div>
                    <h5>WhatsApp</h5>
                    <p className="mb-0">+1 (123) 456-7890</p>
                  </div>
                </div>
                
                <div className="mt-5">
                  <h4>Horario de Atención</h4>
                  <p className="mb-1">Lunes a Viernes: 9:00 AM - 6:00 PM</p>
                  <p>Sábados: 10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </Col>
          
          <Col lg={6}>
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h3 className="mb-4">Envía un mensaje</h3>
                
                {submitted && (
                  <Alert variant="success" className="mb-4">
                    <strong>¡Gracias por contactarnos!</strong> Hemos recibido tu mensaje y te contactaremos en menos de 24 horas.
                  </Alert>
                )}
                
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Nombre completo *</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      isInvalid={!!errors.name}
                      placeholder="Tu nombre completo"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.name}
                    </Form.Control.Feedback>
                  </Form.Group>
                  
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Email *</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          isInvalid={!!errors.email}
                          placeholder="tucorreo@ejemplo.com"
                        />
                        <Form.Control.Feedback type="invalid">
                          {errors.email}
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Teléfono / WhatsApp</Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Ej: +51987654321"
                        />
                        <Form.Text className="text-muted">
                          Incluir código de país para contacto por WhatsApp
                        </Form.Text>
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>Servicio de interés</Form.Label>
                    <Form.Select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                    >
                      <option value="">Selecciona un servicio</option>
                      <option value="web">Diseño Web</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="seo">SEO</option>
                      <option value="marketing">Marketing Digital</option>
                      <option value="other">Otro</option>
                    </Form.Select>
                  </Form.Group>
                  
                  <Form.Group className="mb-4">
                    <Form.Label>Mensaje *</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      isInvalid={!!errors.message}
                      placeholder="Cuéntanos sobre tu proyecto..."
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.message}
                    </Form.Control.Feedback>
                  </Form.Group>
                  
                  <Button 
                    variant="primary" 
                    type="submit" 
                    className="w-100 py-3 fw-bold d-flex align-items-center justify-content-center"
                  >
                    Enviar Mensaje por WhatsApp <FiSend className="ms-2" />
                  </Button>
                  
                  <div className="text-center mt-3 text-muted">
                    <small>También recibiremos una copia por correo electrónico</small>
                  </div>
                </Form>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
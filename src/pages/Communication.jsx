import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import Navigatorbar from "../components/home/Navigatorbar";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showModal, setShowModal] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setShowModal(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div>
      <Navigatorbar />
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            <h2 className="text-center mb-4">İletişim Formu</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>İsim</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="İsminizi girin"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>E-posta Adresi</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="E-posta adresinizi girin"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formSubject">
                <Form.Label>Konu</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Konuyu girin"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Mesaj</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  placeholder="Mesajınızı girin"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Gönder
              </Button>
            </Form>
          </Col>
        </Row>

        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>İletişim Formu</Modal.Title>
          </Modal.Header>
          <Modal.Body>Form gönderildi! Teşekkür ederiz.</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Kapat
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

export default ContactForm;

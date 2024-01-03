import React, { useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Carousel,
  Container,
  Row,
  Col,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  // State for modal visibility
  const [showModal, setShowModal] = useState(false);

  // Function to handle modal visibility
  const handleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <Container>
        {/* Nav Bar */}
        <Navbar bg="dark" variant="dark" expand="md">
          <Navbar.Brand href="#home">DEBINUM</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="#service1">Service 1</NavDropdown.Item>
                <NavDropdown.Item href="#service2">Service 2</NavDropdown.Item>
                <NavDropdown.Item href="#more-services">
                  More Services
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        {/* Carousel */}
        <Carousel>
          <Carousel.Item>
            {/* TODO */}
            <img
              className="d-block w-100"
              src="https://example.com/featured-image1.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Featured Product 1</h3>
              <p>Description of featured product 1</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            {/* TODO */}
            <img
              className="d-block w-100"
              src="https://example.com/featured-image2.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Featured Product 2</h3>
              <p>Description of featured product 2</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        {/* Content Sections */}
        <Container className="content-sections">
          <Row>
            <Col>
              <h2>About Us</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                ultricies, est eget suscipit mattis, velit erat tincidunt felis,
                sit amet sollicitudin diam orci ac arcu.
              </p>
            </Col>
            <Col>
              <h2>Services</h2>
              <ul>
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
              </ul>
            </Col>
            <Col>
              <h2>Contact Us</h2>
              <Button variant="primary" onClick={handleModal}>
                Contact Us
              </Button>
            </Col>
          </Row>
        </Container>

        {/* Modal */}
        <Modal show={showModal} onHide={handleModal}>
          <Modal.Header closeButton>
            <Modal.Title>Contact Us</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={10}
                  placeholder="Enter your message"
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModal}>
              Close
            </Button>
            <Button variant="primary" onClick={handleModal}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

export default App;

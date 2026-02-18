import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="text-light py-5 mt-5">
      <Container>
        <Row className="mb-4">
          <Col md={4} className="mb-4 mb-md-0">
            <h5>✝ V-Church HQ Nairobi</h5>
            <p className="mt-3" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
              Building a community of faith, hope, and love. Join us as we grow together in Christ.
            </p>
          </Col>
          <Col md={4} className="mb-4 mb-md-0">
            <h5>Service Times</h5>
            <ul className="list-unstyled mt-3">
              <li className="mb-2"> Sunday: 7:30am - 1:00pm</li>
              <li className="mb-2"> Monday Prayers: 5:30pm - 6:30pm</li>
              <li className="mb-2"> Tuesday Prayers: 5:30pm - 6:30pm</li>
              <li className="mb-2"> Wednesday: 5:30pm - 6:30pm</li>
              <li className="mb-2"> Thursday Praise: 5:30pm - 6:30pm</li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <ul className="list-unstyled mt-3">
              <li className="mb-2"> Thevchurch@nairobi.org</li>
              <li className="mb-2"> +254 789 000 000</li>
              <li className="mb-2"> LuckySummer, Nairobi, Kenya</li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col className="text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} The V-Church HQ Nairobi. All rights reserved. | Built with love for the Kingdom
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

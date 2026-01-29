import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Services</h5>
            <ul className="list-unstyled">
              <li>Sunday: 7:30am-1pm</li>
              <li>Monday Prayers: 5:30pm-6:30pm</li>
              <li>Tuesday Prayers: 5:30pm-6:30pm</li>
              <li>Wednesday: 5:30pm-6:30pm</li>
              <li>Thursday Praise and Worship: 5:30pm-6:30pm</li>
            </ul>
          </Col>
          <Col md={6}>
            <h5>Contact Information</h5>
            <p>Email: Thevchurch@nairobi.org</p>
            <p>Phone: +254 789 000 000</p>
            <p>Location: LuckySummer, Nairobi, Kenya</p>
          </Col>
        </Row>
        <hr />
        <p className="text-center mb-0">&copy; 2026 V-Church HQ Nairobi. All rights reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  return (
    <Container className="mt-5" style={{ backgroundImage: 'url(/congrigation.jpg)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', minHeight: '60vh' }}>
      <Row>
        <Col>
          <div className="text-center text-white">
            <h1>Welcome all to V-Church HQ Nairobi </h1>
            <p className="lead">Join our community and stay connected. Register to become a member and participate in our chruch events and services.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
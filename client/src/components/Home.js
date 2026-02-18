import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="hero-section"
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(91, 75, 138, 0.92) 0%, rgba(123, 107, 168, 0.88) 100%), url(/congrigation.jpg)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={10}>
              <div style={{ animation: 'fadeIn 1s ease' }}>
                <h1 className="display-3 fw-bold text-white mb-4" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                  Welcome to V-Church HQ Nairobi
                </h1>
                <p className="lead text-white mb-5" style={{ fontSize: '1.3rem', textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>
                  Join our vibrant community of faith, hope, and love. Register to become a member and participate in our church events and services.
                </p>
                <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <Link to="/registration">
                    <Button variant="light" size="lg" className="px-5 py-3">
                      Join Our Community
                    </Button>
                  </Link>
                  <Link to="/members">
                    <Button variant="outline-light" size="lg" className="px-5 py-3">
                      Meet Our Members
                    </Button>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Features Section */}
      <Container className="py-5 my-5">
        <Row className="text-center mb-5">
          <Col>
            <h2 className="display-5 fw-bold mb-3">Why Join V-Church?</h2>
            <p className="lead text-muted">Experience faith, fellowship, and growth in Christ</p>
          </Col>
        </Row>
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 text-center border-0 shadow-sm" style={{ animation: 'fadeIn 1s ease 0.2s backwards' }}>
              <Card.Body className="p-4">
                <div className="mb-3" style={{ fontSize: '3rem' }}>🙏</div>
                <Card.Title className="h4 mb-3">Prayer & Worship</Card.Title>
                <Card.Text className="text-muted">
                  Join us for powerful prayer sessions and uplifting worship services throughout the week.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 text-center border-0 shadow-sm" style={{ animation: 'fadeIn 1s ease 0.4s backwards' }}>
              <Card.Body className="p-4">
                <div className="mb-3" style={{ fontSize: '3rem' }}>👥</div>
                <Card.Title className="h4 mb-3">Community</Card.Title>
                <Card.Text className="text-muted">
                  Build meaningful relationships with fellow believers in a welcoming and supportive environment.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 text-center border-0 shadow-sm" style={{ animation: 'fadeIn 1s ease 0.6s backwards' }}>
              <Card.Body className="p-4">
                <div className="mb-3" style={{ fontSize: '3rem' }}>📖</div>
                <Card.Title className="h4 mb-3">Biblical Teaching</Card.Title>
                <Card.Text className="text-muted">
                  Grow in your faith through sound biblical teaching and discipleship programs.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Call to Action Section */}
      <div className="py-5 mb-5" style={{ background: 'var(--gradient-primary)' }}>
        <Container>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <h2 className="display-5 fw-bold text-white mb-4">Ready to Begin Your Journey?</h2>
              <p className="lead text-white mb-4" style={{ opacity: 0.9 }}>
                Take the first step and become part of our growing family. Registration is quick and easy!
              </p>
              <Link to="/registration">
                <Button variant="light" size="lg" className="px-5 py-3">
                  Register Now
                </Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Home;
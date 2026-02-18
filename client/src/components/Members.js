import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import axios from 'axios';

const Members = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

  if (loading) {
    return (
      <Container className="mt-5 text-center py-5">
        <Spinner animation="border" variant="primary" style={{ width: '3rem', height: '3rem' }} />
        <p className="mt-3 text-muted">Loading our wonderful members...</p>
      </Container>
    );
  }

  return (
    <div className="py-5">
      {/* Page Header */}
      <div className="text-center mb-5" style={{
        background: 'var(--gradient-primary)',
        padding: '4rem 0',
        marginTop: '-1rem'
      }}>
        <Container>
          <h1 className="display-4 fw-bold text-white mb-3">Our Members</h1>
          <p className="lead text-white" style={{ opacity: 0.9 }}>
            Meet the wonderful people who make up our church family
          </p>
        </Container>
      </div>

      <Container>
        {users.length === 0 ? (
          <Row className="justify-content-center">
            <Col md={6} className="text-center">
              <div className="py-5">
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}></div>
                <h3 className="mb-3">No Members Yet</h3>
                <p className="text-muted">Be the first to join our community!</p>
              </div>
            </Col>
          </Row>
        ) : (
          <Row className="g-4">
            {users.map((user, index) => (
              <Col key={user._id} md={6} lg={4} xl={3}>
                <Card
                  className="h-100 border-0 shadow-sm"
                  style={{
                    animation: `fadeIn 0.6s ease ${index * 0.1}s backwards`,
                    transition: 'all 0.3s ease'
                  }}
                >
                  {user.passportPhoto ? (
                    <Card.Img
                      variant="top"
                      src={`${API_URL}${user.passportPhoto}`}
                      alt={`${user.name}'s photo`}
                      style={{
                        height: '250px',
                        objectFit: 'cover',
                        objectPosition: 'center'
                      }}
                    />
                  ) : (
                    <div
                      className="d-flex align-items-center justify-content-center"
                      style={{
                        height: '250px',
                        background: 'var(--gradient-primary)',
                        fontSize: '5rem'
                      }}
                    >
                      <span style={{ opacity: 0.8 }}>👤</span>
                    </div>
                  )}
                  <Card.Body className="p-4">
                    <Card.Title className="h5 mb-3" style={{ color: 'var(--color-primary-dark)' }}>
                      {user.name}
                    </Card.Title>
                    <Card.Text className="mb-2">
                      <strong style={{ color: 'var(--color-primary)' }}>Phone:</strong>
                      <br />
                      <span className="text-muted">{user.phone}</span>
                    </Card.Text>
                    {user.email && (
                      <Card.Text className="mb-0">
                        <strong style={{ color: 'var(--color-primary)' }}>Email:</strong>
                        <br />
                        <span className="text-muted" style={{ fontSize: '0.9rem', wordBreak: 'break-word' }}>
                          {user.email}
                        </span>
                      </Card.Text>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Members;
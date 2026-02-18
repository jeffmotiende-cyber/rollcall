import React, { useState } from 'react';
import { Form, Button, Container, Alert, Card, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

axios.defaults.baseURL = 'http://localhost:5000';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (isSignup) {
        await axios.post('/api/auth/signup', credentials);
        setMessage('Signup successful. You can now login.');
        setIsSignup(false);
        setCredentials({ username: '', password: '' });
        setError('');
      } else {
        const response = await axios.post('/api/auth/login', credentials);
        localStorage.setItem('token', response.data.token);
        setMessage('Login successful');
        setTimeout(() => navigate('/admin/panel'), 1000);
      }
    } catch (err) {
      setError(err.response?.data?.error || 'An error occurred');
      setMessage('');
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleMode = () => {
    setIsSignup(!isSignup);
    setMessage('');
    setError('');
    setCredentials({ username: '', password: '' });
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--gradient-primary)',
      display: 'flex',
      alignItems: 'center',
      paddingTop: '2rem',
      paddingBottom: '2rem'
    }}>
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={5} xl={4}>
            <div className="text-center mb-4">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}></div>
              <h2 className="text-white fw-bold mb-2">
                {isSignup ? 'Admin Signup' : 'Admin Login'}
              </h2>
              <p className="text-white" style={{ opacity: 1.0 }}>
                {isSignup ? 'Create a new admin account' : 'Access the admin panel'}
              </p>
            </div>

            <Card className="border-0 shadow-lg" style={{ borderRadius: 'var(--radius-xl)' }}>
              <Card.Body className="p-4 p-md-5">
                {message && (
                  <Alert variant="success" className="mb-4" style={{ animation: 'fadeIn 0.5s ease' }}>
                    <strong>✓</strong> {message}
                  </Alert>
                )}
                {error && (
                  <Alert variant="danger" className="mb-4" style={{ animation: 'fadeIn 0.5s ease' }}>
                    <strong>✗</strong> {error}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-4">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      name="username"
                      value={credentials.username}
                      onChange={handleChange}
                      placeholder="Enter username"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Password</Form.Label>
                    <div className="position-relative">
                      <Form.Control
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={credentials.password}
                        onChange={handleChange}
                        placeholder="Enter password"
                        required
                      />
                      <Button
                        variant="link"
                        size="sm"
                        onClick={() => setShowPassword(!showPassword)}
                        style={{
                          position: 'absolute',
                          right: '10px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          textDecoration: 'none',
                          color: 'var(--color-gray-600)'
                        }}
                      >
                        {showPassword ? '👁️' : '👁️‍🗨️'}
                      </Button>
                    </div>
                  </Form.Group>

                  <div className="d-grid gap-2 mb-3">
                    <Button
                      variant="primary"
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          {isSignup ? 'Creating Account...' : 'Logging in...'}
                        </>
                      ) : (
                        <>{isSignup ? '✓ Create Account' : '→ Login'}</>
                      )}
                    </Button>
                  </div>
                </Form>

                <div className="text-center mt-4">
                  <Button
                    variant="link"
                    onClick={toggleMode}
                    style={{
                      textDecoration: 'none',
                      color: 'var(--color-primary)'
                    }}
                  >
                    {isSignup ? '← Already have an account? Login' : 'Need an account? Signup →'}
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AdminLogin;
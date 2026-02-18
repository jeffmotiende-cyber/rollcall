import React, { useState } from 'react';
import { Form, Button, Container, Alert, Card, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const UserOnboarding = () => {
  const [formData, setFormData] = useState({
    idNumber: '',
    name: '',
    gender: '',
    residence: '',
    phone: '',
    email: '',
    passportPhoto: null
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, passportPhoto: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const data = new FormData();
    Object.keys(formData).forEach(key => {
      data.append(key, formData[key]);
    });
    try {
      await axios.post('/api/users', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setMessage('Welcome to V-Church! Your registration was successful!');
      setError('');
      setFormData({
        idNumber: '',
        name: '',
        gender: '',
        residence: '',
        phone: '',
        email: '',
        passportPhoto: null
      });
      // Reset file input
      document.getElementById('passportPhotoInput').value = '';
    } catch (err) {
      setError(err.response?.data?.error || 'An error occurred during registration');
      setMessage('');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, rgba(91, 75, 138, 0.05) 0%, rgba(212, 175, 55, 0.05) 100%)',
      paddingTop: '3rem',
      paddingBottom: '3rem'
    }}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} xl={7}>
            {/* Header Section */}
            <div className="text-center mb-5">
              <h1 className="display-5 fw-bold mb-3" style={{ color: 'var(--color-primary-dark)' }}>
                Join Our Community
              </h1>
              <p className="lead text-muted">
                We're excited to welcome you to V-Church HQ Nairobi! Please fill out the form below to complete your registration.
              </p>
            </div>

            {/* Registration Card */}
            <Card className="border-0 shadow-lg" style={{ borderRadius: 'var(--radius-xl)' }}>
              <Card.Body className="p-4 p-md-5">
                {message && (
                  <Alert variant="success" className="mb-4" style={{ animation: 'fadeIn 0.5s ease' }}>
                    <strong>✓ Success!</strong> {message}
                  </Alert>
                )}
                {error && (
                  <Alert variant="danger" className="mb-4" style={{ animation: 'fadeIn 0.5s ease' }}>
                    <strong>✗ Error!</strong> {error}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-4">
                        <Form.Label>Full Name *</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-4">
                        <Form.Label>ID/Passport Number *</Form.Label>
                        <Form.Control
                          type="text"
                          name="idNumber"
                          value={formData.idNumber}
                          onChange={handleChange}
                          placeholder="Enter ID or passport number"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-4">
                        <Form.Label>Gender *</Form.Label>
                        <Form.Select
                          name="gender"
                          value={formData.gender}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Other">Other</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-4">
                        <Form.Label>Phone Number *</Form.Label>
                        <Form.Control
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+254 700 000 000"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-4">
                    <Form.Label>Email Address *</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Residence *</Form.Label>
                    <Form.Control
                      type="text"
                      name="residence"
                      value={formData.residence}
                      onChange={handleChange}
                      placeholder="Enter your area of residence"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Passport Photo *</Form.Label>
                    <Form.Control
                      type="file"
                      id="passportPhotoInput"
                      onChange={handleFileChange}
                      accept="image/*"
                      required
                    />
                    <Form.Text className="text-muted">
                      Please upload a clear passport-sized photo (JPG, PNG)
                    </Form.Text>
                  </Form.Group>

                  <div className="d-grid gap-2 mt-5">
                    <Button
                      variant="primary"
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      style={{ padding: '1rem' }}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                          Submitting...
                        </>
                      ) : (
                        <>✓ Complete Registration</>
                      )}
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>

            {/* Info Section */}
            <div className="text-center mt-4">
              <p className="text-muted">
                <small>
                  By registering, you agree to be part of our church community.
                  Your information will be kept confidential and used only for church-related communications.
                </small>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserOnboarding;
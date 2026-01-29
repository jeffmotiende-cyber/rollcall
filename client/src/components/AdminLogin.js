import React, { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

axios.defaults.baseURL = 'http://localhost:5000';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignup) {
        await axios.post('/api/auth/signup', credentials);
        setMessage('Signup successful. You can now login.');
        setIsSignup(false);
        setCredentials({ username: '', password: '' });
      } else {
        const response = await axios.post('/api/auth/login', credentials);
        localStorage.setItem('token', response.data.token);
        setMessage('Login successful');
        navigate('/admin/panel');
      }
    } catch (err) {
      setError(err.response?.data?.error || 'An error occurred');
    }
  };

  return (
    <Container className="mt-5">
      <h2>{isSignup ? 'Admin Signup' : 'Admin Login'}</h2>
      {message && <Alert variant="success">{message}</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" name="username" value={credentials.username} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" value={credentials.password} onChange={handleChange} required />
        </Form.Group>
        <Button variant="primary" type="submit">{isSignup ? 'Signup' : 'Login'}</Button>
      </Form>
      <Button variant="link" onClick={() => { setIsSignup(!isSignup); setMessage(''); setError(''); setCredentials({ username: '', password: '' }); }}>
        {isSignup ? 'Already have an account? Login' : 'Need an account? Signup'}
      </Button>
    </Container>
  );
};

export default AdminLogin;
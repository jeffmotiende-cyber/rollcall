import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Card, Badge, Spinner, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/admin');
        return;
      }
      try {
        const response = await axios.get('/api/users', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
        if (error.response?.status === 401) {
          localStorage.removeItem('token');
          navigate('/admin');
        }
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/admin');
  };

  if (loading) {
    return (
      <Container className="mt-5 text-center py-5">
        <Spinner animation="border" variant="primary" style={{ width: '3rem', height: '3rem' }} />
        <p className="mt-3 text-muted">Loading admin panel...</p>
      </Container>
    );
  }

  return (
    <div className="py-5" style={{ minHeight: '100vh', background: 'var(--color-light)' }}>
      {/* Header */}
      <div className="mb-5" style={{
        background: 'var(--gradient-primary)',
        padding: '3rem 0',
        marginTop: '-1rem'
      }}>
        <Container>
          <Row className="align-items-center">
            <Col>
              <h1 className="display-5 fw-bold text-white mb-2">Admin Panel</h1>
              <p className="text-white mb-0" style={{ opacity: 0.9 }}>
                Manage church members and registrations
              </p>
            </Col>
            <Col xs="auto">
              <Button variant="light" onClick={handleLogout}>
                Logout →
              </Button>
            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        {/* Stats Cards */}
        <Row className="g-4 mb-5">
          <Col md={4}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="text-center p-4">
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>👥</div>
                <h3 className="mb-2" style={{ color: 'var(--color-primary)' }}>{users.length}</h3>
                <p className="text-muted mb-0">Total Members</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="text-center p-4">
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>✓</div>
                <h3 className="mb-2" style={{ color: 'var(--color-success)' }}>Active</h3>
                <p className="text-muted mb-0">System Status</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="border-0 shadow-sm h-100">
              <Card.Body className="text-center p-4">
                <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>📊</div>
                <h3 className="mb-2" style={{ color: 'var(--color-secondary)' }}>Dashboard</h3>
                <p className="text-muted mb-0">Management</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Members Table */}
        <Card className="border-0 shadow-sm">
          <Card.Header className="bg-white border-0 p-4">
            <h4 className="mb-0" style={{ color: 'var(--color-primary-dark)' }}>
              Registered Members
            </h4>
          </Card.Header>
          <Card.Body className="p-0">
            {users.length === 0 ? (
              <div className="text-center py-5">
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📋</div>
                <h5 className="text-muted">No members registered yet</h5>
              </div>
            ) : (
              <div className="table-responsive">
                <Table hover className="mb-0">
                  <thead style={{ background: 'var(--color-gray-100)' }}>
                    <tr>
                      <th className="p-3">Name</th>
                      <th className="p-3">Email</th>
                      <th className="p-3">Phone</th>
                      <th className="p-3">Gender</th>
                      <th className="p-3">Residence</th>
                      <th className="p-3 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (
                      <tr
                        key={user._id}
                        style={{
                          animation: `fadeIn 0.5s ease ${index * 0.05}s backwards`,
                          borderBottom: '1px solid var(--color-gray-200)'
                        }}
                      >
                        <td className="p-3">
                          <strong style={{ color: 'var(--color-primary-dark)' }}>
                            {user.name}
                          </strong>
                        </td>
                        <td className="p-3">{user.email}</td>
                        <td className="p-3">{user.phone}</td>
                        <td className="p-3">
                          <Badge bg="secondary" style={{ background: 'var(--color-gray-600)' }}>
                            {user.gender}
                          </Badge>
                        </td>
                        <td className="p-3">{user.residence}</td>
                        <td className="p-3 text-center">
                          <Button variant="outline-primary" size="sm" className="me-2">
                            Edit
                          </Button>
                          <Button variant="outline-danger" size="sm">
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            )}
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
};

export default AdminPanel;
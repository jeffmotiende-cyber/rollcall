import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
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

  if (loading) return <Container className="mt-5"><p>Loading...</p></Container>;

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Our Members</h1>
      <Row>
        {users.map(user => (
          <Col key={user._id} md={4} className="mb-4">
            <Card>
              {user.passportPhoto && (
                <Card.Img variant="top" src={`http://localhost:5000${user.passportPhoto}`} alt="Passport Photo" />
              )}
              <Card.Body>
                <Card.Title>{user.name}</Card.Title>
                <Card.Text>
                  <strong>Phone:</strong> {user.phone}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Members;
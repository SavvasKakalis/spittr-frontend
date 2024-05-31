import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
    

const AddSpitter = ({onSpitterAdded}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newSpitter = {
      username: username,
      password: password,
      fullName: fullName
    };

    try {
      await axios.post('http://localhost:5000/spitters', newSpitter, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      alert('Spitter added successfully');
      onSpitterAdded();
    } catch (error) {
      console.error('There was an error adding the spitter!', error);
    }
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="6">
          <h2>Add Spitter</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="formFullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" block>
              Add Spitter
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddSpitter;

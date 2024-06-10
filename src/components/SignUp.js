import React, { useState, useContext } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import { SpittersContext } from '../SpittersContext';

const Signup = ({ onSignup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { handleAddSpitter } = useContext(SpittersContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:5000/spitters?username=${username}`);
      if (response.data.length > 0) {
        setError('Username already exists');
      } else {
        const newSpitter = {
          username,
          password,
          fullName,
          spittles: []
        };
        await handleAddSpitter(newSpitter);
        setSuccess('Spitter registered successfully. You can now login.');
        setError('');
        setFullName('');
        setUsername('');
        setPassword('');
        if (onSignup) {
          onSignup(newSpitter);
        }
      }
    } catch (error) {
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <Container className="mt-4 p-3 bg-light">
      <h2>Signup</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicFullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter full name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        {error && <p className="text-danger">{error}</p>}
        {success && <p className="text-success">{success}</p>}

        <Button variant="primary" type="submit">
          Signup
        </Button>
      </Form>
    </Container>
  );
};

export default Signup;

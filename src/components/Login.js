import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { getSpitter } from '../apiService';
const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!username || !password) {
        setError('All fields are required');
        return;
    }
    
    try {
      console.log(`Attempting to log in with username: ${username}`);
      const response = await getSpitter(username, password);
      console.log('Response from server:', response); 
      if (response.data.length > 0) {
        onLogin(response.data[0]);
      } else {
        setError('Invalid username or password');
      }
    } catch (error) {
      console.error('Error during login request:', error);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <Container className="mt-4 p-3 bg-light">
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
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

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
};

export default Login;

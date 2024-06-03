import React, {useState, useEffect} from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { getSpitters, deleteSpitter } from '../apiService';

const Spitters = () => {

  const [spitters, setSpitters] = useState([]);

  useEffect(() => {
    fetchSpitters();
  }, []);

  const fetchSpitters = async () => {
    try {
      const data = await getSpitters();
      setSpitters(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteSpitter(id);
      fetchSpitters();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container className="mt-4 p-3 bg-light">
      <h2>List of Spitters</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Password</th>
            <th>Full Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {spitters.map((spitter) => (
            <tr key={spitter.id}>
              <td>{spitter.id}</td>
              <td>{spitter.username}</td>
              <td>{spitter.password}</td>
              <td>{spitter.fullName}</td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(spitter.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Spitters;

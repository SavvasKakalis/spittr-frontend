import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const Spitters = () => {

  const [spitters, setSpitters] = useState([]);

  useEffect(() => {
    fetchSpitters();
  }, []);

  const fetchSpitters = () => {
    axios.get('http://localhost:8080/api/spittr/spitters')
      .then(response => {
        console.log(response.data);
        setSpitters(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the spitters!', error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/spittr/spitters/${id}`)
      .then(response => {
        console.log('Spitter deleted:', response);
        fetchSpitters();
      })
      .catch(error => {
        console.error('There was an error deleting the spitter!', error);
      });
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

import React, {useState, useContext} from 'react';
import { Table, Form, Button, Container, InputGroup, FormControl } from 'react-bootstrap';
import { SpittersContext } from '../SpittersContext';

const  Spitters = () => {

  const { spitters, handleDelete } = useContext(SpittersContext);
  const [search, setSearch] = useState('');

  return (
    <Container className="mt-4 p-3 bg-light">
      <h2>List of Spitters</h2>
      <Form>
        <InputGroup className='my-3'>
          <FormControl
            onChange={(e) => setSearch(e.target.value)}
            placeholder = "Search Spitter"
          />
        </InputGroup>
      </Form>
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
          {spitters.filter((spitter) => {
            return search.toLowerCase() === '' ? spitter : spitter.username.toLowerCase()
            .includes(search)
          })
          .map((spitter) => (
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

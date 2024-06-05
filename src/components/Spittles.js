import React, { useState, useEffect } from 'react';
import { Table, Form, Button, Container, InputGroup, FormControl } from 'react-bootstrap';
import { getSpittles } from '../apiService';

const Spittles = () => {

    const [spittles, setSpittles] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
      const fetchSpittles = async () => {
        try {
          const data = await getSpittles();
          setSpittles(data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchSpittles();
    }, []);

    return (
      <Container className="mt-4 p-3 bg-light">
        <h2>List of Spittles</h2>
        <Form>
          <InputGroup className='my-3'>
            <FormControl
              onChange={(e) => setSearch(e.target.value)}
              placeholder = "Search Spittle"
            />
          </InputGroup>
        </Form>
        <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Message</th>
                <th>Time Submitted</th>
                <th>Spitter ID</th>
              </tr>
            </thead>
            <tbody>
              {spittles.filter((spittle) => {
                return search.toLowerCase() === '' ? spittle : spittle.message.toLowerCase()
                .includes(search)
              })
              .map((spittle) => (
                <tr key={spittle.id}>
                  <td>{spittle.id}</td>
                  <td>{spittle.message}</td>
                  <td>{new Date(spittle.timeSubmitted).toLocaleString()}</td>
                  <td>{spittle.spitter_id}</td>
                </tr>
              ))}
            </tbody>
          </Table>
      </Container>
      );


};

export default Spittles;

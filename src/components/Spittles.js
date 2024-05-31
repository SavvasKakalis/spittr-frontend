import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

const Spittles = () => {

    const [spittles, setSpittles] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:5000/spittles')
        .then(response => {
          console.log(response.data);
          setSpittles(response.data);
        })
        .catch(error => {
          console.error('There was an error fetching the spitters!', error);
        });
    }, []);

    return (
        <div>
          <h2>List of Spittles</h2>
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
              {spittles.map((spittle) => (
                <tr key={spittle.id}>
                  <td>{spittle.id}</td>
                  <td>{spittle.message}</td>
                  <td>{new Date(spittle.timeSubmitted).toLocaleString()}</td>
                  <td>{spittle.spitter_id}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      );


};

export default Spittles;

import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { getSpittles } from '../apiService';

const Spittles = () => {

    const [spittles, setSpittles] = useState([]);

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

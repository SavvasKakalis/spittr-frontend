import React, { useState, useContext } from 'react';
import { Card, Form, Container, InputGroup, FormControl } from 'react-bootstrap';
import { SpittlesContext } from '../SpittlesContext';

const Spittles = () => {

    const { spittles } = useContext(SpittlesContext);
    const [search, setSearch] = useState('');

    return (
      <Container className="mt-4 p-3 bg-light">
        <h2>News Feed</h2>
        <Form>
          <InputGroup className='my-3'>
            <FormControl
              onChange={(e) => setSearch(e.target.value)}
              placeholder = "Search Spittle"
            />
          </InputGroup>
        </Form>
        <div>
            {spittles.filter((spittle) => {
                return search.toLowerCase() === '' ? spittle : spittle.message.toLowerCase().includes(search);
            }).map((spittle) => (
                <Card className="my-3" key={spittle.id}>
                    <Card.Body>
                        <Card.Text>
                            {spittle.message}
                        </Card.Text>
                        <Card.Footer>
                            <small className="text-muted">Submitted: {new Date(spittle.timeSubmitted).toLocaleString()}</small>
                            <br />
                            <small className="text-muted">Spitter ID: {spittle.spitter_id}</small>
                        </Card.Footer>
                    </Card.Body>
                </Card>
            ))}
        </div>
      </Container>
      );


};

export default Spittles;

import React, { useContext } from 'react';
import { Container, Card } from 'react-bootstrap';
import { SpitterContext } from '../SpitterContext';

const Profile = () => {
  const { spitter } = useContext(SpitterContext);

  console.log('Spitter inside Profile.js:', spitter);
  if (!spitter) {
    return <Container className="mt-4 p-3 bg-light">No user logged in</Container>;
  }

  return (
    <Container className="mt-4 p-3 bg-light">
      <h2>Profile</h2>
      <Card>
        <Card.Body>
          <Card.Title>{spitter.fullName}</Card.Title>
          <Card.Text>
            <strong>Username:</strong> {spitter.username}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Profile;

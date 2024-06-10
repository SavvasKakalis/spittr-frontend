import './App.css';
import Spitters from './components/Spitters';
import Spittles from './components/Spittles';
import React, { useState } from 'react';
import Login from './components/Login';
import { SpittlesProvider } from './SpittlesContext';
import { Container, Button } from 'react-bootstrap';
import Signup from './components/SignUp';

const App = () => {
  const [showSpitters, setShowSpitters] = useState(false);
  const [showSpittles, setShowSpittles] = useState(false);
  const [user, setUser] = useState(null);
  const [showSignup, setShowSignup] = useState(false);

  const handleShowSpitters = () => {
    setShowSpitters(true);
    setShowSpittles(false);
  };

  const handleShowSpittles = () => {
    setShowSpitters(false); 
    setShowSpittles(true);
  };

  const handleLogin = (user) => {
    setUser(user);
  };

  const handleSignup = (user) => {
    setShowSignup(false);
    setUser(user);
  }

  const handleLogout = () => {
    setUser(null);
    setShowSpitters(false);
    setShowSpittles(false);
  };

  return (
    <SpittlesProvider>
      <div className="App">
        <h1>Spittr</h1>
        {!user ? (
          <Container className="mt-4">
            {showSignup ? (
              <>
                <Signup onSignup={handleSignup} />
                <Button variant="link" onClick={() => setShowSignup(false)}>
                  Already have an account? Login here.
                </Button>
              </>
            ) : (
              <>
                <Login onLogin={handleLogin} />
                <Button variant="link" onClick={() => setShowSignup(true)}>
                  Don't have an account? Signup here.
                </Button>
              </>
            )}
          </Container>
        ) : (
          <>
            <nav>
              <button onClick={handleShowSpitters}>Show Spitters</button>
              <button onClick={handleShowSpittles}>News Feed</button>
              <button onClick={handleLogout}>Logout</button>
            </nav>
            {showSpitters && <Spitters />}
            {showSpittles && <Spittles />}
          </>
        )}
      </div>
    </SpittlesProvider>
  );
};

export default App;

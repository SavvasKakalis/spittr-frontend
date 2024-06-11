import './App.css';
import Spitters from './components/Spitters';
import Spittles from './components/Spittles';
import React, { useState } from 'react';
import Login from './components/Login';
import { Container, Button } from 'react-bootstrap';
import Signup from './components/SignUp';
import Profile from './components/Profile';

const App = () => {
  const [showSpitters, setShowSpitters] = useState(false);
  const [showSpittles, setShowSpittles] = useState(false);
  const [ spitter, setSpitter ] = useState(null);
  const [showSignup, setShowSignup] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const handleShowSpitters = () => {
    setShowSpitters(true);
    setShowSpittles(false);
    setShowProfile(false);
  };

  const handleShowSpittles = () => {
    setShowSpitters(false); 
    setShowSpittles(true);
    setShowProfile(false);
  };

  const handleShowProfile = () => {
    setShowSpitters(false);
    setShowSpittles(false);
    setShowProfile(true);
  };

  const handleLogin = (spitter) => {
    setSpitter(spitter);
    console.log('Spitter logged in:', spitter);
  };

  const handleSignup = (spitter) => {
    setShowSignup(false);
    setSpitter(spitter);
  }

  const handleLogout = () => {
    setSpitter(null);
    setShowSpitters(false);
    setShowSpittles(false);
    setShowProfile(false);
  };

  const isAdmin = spitter && spitter.username === 'admin' && spitter.password === 'admin';
  console.log('Current spitter:', spitter);
  return (
    <div className="App">
      <h1>Spittr</h1>
      {!spitter ? (
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
            {isAdmin && <button onClick={handleShowSpitters}>Show Spitters</button>}
            <button onClick={handleShowSpittles}>News Feed</button>
            <button onClick={handleShowProfile}>Profile</button>
            <button onClick={handleLogout}>Logout</button>
          </nav>
          {showSpitters && <Spitters />}
          {showSpittles && <Spittles />}
          {showProfile && <Profile />}
        </>
      )}
    </div>
  );
};

export default App;

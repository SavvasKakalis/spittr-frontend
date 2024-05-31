import './App.css';
import AddSpitter from './components/AddSpitter';
import Spitters from './components/Spitters';
import Spittles from './components/Spittles';
import React, { useState } from 'react';

const App = () => {
  const [showSpitters, setShowSpitters] = useState(false);
  const [showSpittles, setShowSpittles] = useState(false);
  const [showAddSpitter, setShowAddSpitter] = useState(false);

  const handleShowSpitters = () => {
    setShowSpitters(true);
    setShowSpittles(false);
    setShowAddSpitter(false);
  };

  const handleShowSpittles = () => {
    setShowSpitters(false); 
    setShowSpittles(true);
    setShowAddSpitter(false);
  };
  const handleCreateSpitter = () => {
    setShowSpitters(false); 
    setShowSpittles(false);
    setShowAddSpitter(true);
  };
  const handleSpitterAdded = () => {
    setShowAddSpitter(false);
  }

  return (
    <div className="App">
      <h1>Spittr</h1>
      <nav>
        <button onClick={handleShowSpitters}>Show Spitters</button>
        <button onClick={handleShowSpittles}>Show Spittles</button>
        <button onClick={handleCreateSpitter}>Add Spitter</button>
      </nav>
      {showSpitters && <Spitters />}
      {showSpittles && <Spittles />}
      {showAddSpitter && <AddSpitter onSpitterAdded={handleSpitterAdded} />}
    </div>
  );
};

export default App;

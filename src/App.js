import React, { useState } from 'react';
import './App.css';
const [number, setNumber] = useState(0);

function deyis() {
  setNumber(Math.random());
}

function App() {

  return (
    <div className="App">
      <button onClick={deyis}>Ededi deyis</button>
      <p>{number}</p>
    </div>
  );
}

export default App;

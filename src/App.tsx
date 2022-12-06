import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { ScClient } from 'ts-sc-client';
// import { WebSocket } from "ws";

function App() {
  const scClient = new ScClient(new window.WebSocket('ws://localhost:8090'));

  const [connect, setConnect] = useState('Nothing');

  scClient.addEventListener("open", () => {
    setConnect('Connected');
    // some logic to inform or proccess socket connection opening
  })

  scClient.addEventListener("error", () => {
    setConnect('Errored');
      // socket connetion resolved with error
  })

  scClient.addEventListener("close", () => {
    setConnect('Closed');
      // socket connetion is closed
  })

  return (
    <div className="App">
      <p>
         {connect}
      </p>
    </div>
  );
}

export default App;

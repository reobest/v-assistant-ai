import React, { useState } from 'react';
import './App.css'; // Import your CSS file
import Image from './images/gif.gif'
import SpeechRecognition from './SpeechRecognition';
function App() {
  const [speechContent, setSpeechContent] = useState('Click here to speak');

  return (
    <div className="main">
    <section className="image-container">
      <div className="image">
        <img src={Image} alt="image" />
      </div>
      <h1>I N E R T I A</h1>
      <p>I'm a Virtual Assistant, how can I help you?</p>
    </section>
    <section className="input">
      <SpeechRecognition/>
      <h1 className="content">{speechContent}</h1>
    </section>
  </div>
  );
}

export default App;

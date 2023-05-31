import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  return (
    <>
      <div className={`App ${mode}`}>
        <Alert alert="hiii im alert" />
        <Navbar title="TextUtilis" mode={mode} setMode={setMode} />
        <div className='container my-3'>
         
        </div>
        <TextForm heading="Enter text to analyze" />
        <About />
      </div>
    </>
  );
}

export default App;

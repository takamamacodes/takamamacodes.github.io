import React from 'react'

// Styling
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-svg-core/styles.css";

// Local Components
import Navbar from './components/Navbar'
import Main from './components/Main'

function App() {
  return (
    <>
      <Navbar />
      <Main />
    </>
  );
}

export default App;

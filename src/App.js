import React from 'react';
import './App.css';
import Navbar from './components/navbar'
import Footer from './components/footer'
import Routess from './Routes/Routess';
//import About from './components/About';

function App() {
  return (
    <div>
      <Navbar />
      <Routess/>
      <Footer />
    </div>
  );
}

export default App;

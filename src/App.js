import logo from './logo.svg';
import './App.css';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import RR from './RR/rr';
import React from 'react';
import Bodycomp from './Bodycomp/comp3';

function App() {
  return (
    <div className="App">
      <Bodycomp/>
      <Body/>
      <RR/>
      <Footer/>
    </div>
  );
}

export default App;

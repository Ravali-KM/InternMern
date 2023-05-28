import logo from './logo.svg';
import './App.css';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import RR from './RR/rr';
import React from 'react';
import Bodycomp from './Bodycomp/comp3';
import Componentfour from './Componentfour/Component4';
import ComponentOne from './ComponentOne/ComponentOne';
import FirstComponent from './FirstComponent/FirstComponent';

function App() {
  return (
    <div className="App">
      <FirstComponent/>
      <ComponentOne/>
      <Bodycomp/>
      <Componentfour/> 
      <Body/>
      <RR/>
      <Footer/>
    </div>
  );
}

export default App;

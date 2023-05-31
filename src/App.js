import logo from './logo.svg';
import './App.css';
import Footer from './Footer/Footer';
import RR from './RR/rr';
import React from 'react';
import Bodycomp from './Bodycomp/comp3';
import Componentfour from './Componentfour/Componentfour';
import ComponentOne from './ComponentOne/ComponentOne';
import FirstComponent from './FirstComponent/FirstComponent';

function App() {
  return (
    <div className="App">
      <div className='container'>
      <div className="component" style={{paddingLeft:'0%'}}>
        <FirstComponent/>
      </div>
      <div className="component">
        <ComponentOne/>
      </div>
      <div className="component" style={{ marginTop: '4%' }}>
        <Bodycomp/>
      </div>
      <div className="component">
        <Componentfour/>
      </div>
      <div className="component">
        <RR/>
      </div>
      <div className="component">
        <Footer/>
      </div>
    </div>
  </div>


  );
}

export default App;

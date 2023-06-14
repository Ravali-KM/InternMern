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
      <div className="component" style={{paddingLeft:'0%', marginBottom: '4%', padding:'0%'}}>
        <FirstComponent/>
      </div>
      <div className="component" style={{ marginBottom: '4%', marginRight:'0%', marginLeft: '0%', padding:'0%'}}>
        <ComponentOne/>
      </div>
      <div className="component" style={{ marginTop: '0%', marginRight:'0%', marginLeft: '0%', padding:'0%' }}>
        <Bodycomp/>
      </div>
      <div className="component" style={{ marginBottom: '0%',marginRight:'0%', marginLeft: '0%', padding:'0%' }}>
        <Componentfour/>
      </div>
      <div className='OverlayContainer'>
        <div className="component" style={{ marginBottom: '0%',marginRight:'0%', marginLeft: '0%', padding:'0%'}}>
          <RR/>
        </div>
        <div className="component" style={{ marginBottom: '0%',marginRight:'0%', marginLeft: '0%', padding:'0%'}}>
          <Footer/>
        </div>
      </div>
    </div>
  </div>


  );
}

export default App;

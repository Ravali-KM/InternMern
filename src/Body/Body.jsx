import React from 'react';
import './Body.css';
import AppStore from "../assets/AppStore.png";
import PlayStore from "../assets/PlayStore.png";
import ButtonBg from "../assets/ButtonBg.png"
import App from '../App';

const RoundedRectangle = () => {
  return (
    <div className="rounded-rectangle">
      <div className="rounded-content">
        <div className="text-section">
          <h1>Book Our Services By</h1> 
          <h1>Downloading Apps.</h1>
        <div className="button-section">
          <button className="app-store-button">
            <img src={AppStore} alt="App Store" />
            App Store
          </button>
          <button className="play-store-button">
            <img src={PlayStore} alt="Play Store" />
            Play Store
          </button>
        </div>
        </div>
      
      </div>
    </div>
  );
}

export default RoundedRectangle;

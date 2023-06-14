import React from 'react';
import './rr.css'; // Import CSS file for custom styles
import AppStore from "../images/AppStore.png";
import PlayStore from "../images/PlayStore.png";
import RRBg from "../images/RRBg.png"


const RoundedRectangle = () => {
  return (
    <div className="container" class='overlay-box'>
      <div className="rounded-rectangle" style={{ backgroundImage: `url(${RRBg})` }}>
      <h1 className="h1">Book Our Services By<br></br>Downloading Apps</h1>
      <div className="button-container">
          <button className="appstore-button">
            <img src={AppStore} alt="App Store" /> Apple  Store
          </button>
          <button className="playstore-button">
            <img src={PlayStore} alt="Play Store" /> Play  Store
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoundedRectangle;
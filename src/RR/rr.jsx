import React from 'react';
import './rr.css'; // Import CSS file for custom styles
import AppStore from "../assets/AppStore.png";
import PlayStore from "../assets/PlayStore.png";

const RoundedRectangle = () => {
  return (
    <div className="container">
      <div className="rounded-rectangle">
      <h1 className="heading">Book Our Services By<br></br>Downloading Apps</h1>
      <div className="buttons">
          <button className="appstore-button">
            <img src={AppStore}></img> Apple Store
          </button>
        </div>
        <div className="quarter-ellipse"></div>
        <div className="quarter-ellipse">
          <button className="playstore-button">
            <img src={PlayStore} alt="Play Store" /> Play Store
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoundedRectangle;

import React from 'react';
import './rr.css';

const RoundedRectangle = () => {
  return (
    <div className="rounded-rectangle">
      <div className="rounded-content">
        <div className="text-section">
          <h1>Book Our Services By Downloading Apps.</h1>
        </div>
        <div className="button-section">
          <button className="app-store-button">
            <img src="src/assets/AppStore.png" alt="App Store" />
            App Store
          </button>
          <button className="play-store-button">
            <img src="src/assets/PlayStore.png" alt="Play Store" />
            Play Store
          </button>
        </div>
      </div>
    </div>
  );
}

export default RoundedRectangle;

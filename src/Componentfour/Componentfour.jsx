import React from 'react';
import Apple from '../images/Apple.png';
import Play from '../images/Play.png';
import laundry from '../images/laundry.png';
import './Componentfour.css';

const Componentfour = () => {
  const handleAppleStoreClick = () => {
    console.log('Apple Store button clicked');
  };

  const handlePlayStoreClick = () => {
    console.log('Play Store button clicked');
  };

  return (
    <div className="flex-container">
      <div className="component-four">
        <div className="container-1276">
          <img src={laundry} alt="Laundry" className="laundry-image" />
        </div>
        <div className="design">Design</div>
        <div className="user-friendly-app">User Friendly App</div>
        <div className="lorem-ipsum">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          <br />
          <br />
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        <div className="rectangle-17">
          <button className="store-button apple-store" onClick={handleAppleStoreClick}>
            Apple Store
          </button>
        </div>
        <div className="rectangle-3">
          <button className="store-button play-store" onClick={handlePlayStoreClick}>
            Play Store
          </button>
        </div>
        <div className="apple-image">
          <img src={Apple} alt="Apple" />
        </div>
        <div className="play-image">
          <img src={Play} alt="Play" />
        </div>
      </div>
    </div>
  );
};

export default Componentfour;
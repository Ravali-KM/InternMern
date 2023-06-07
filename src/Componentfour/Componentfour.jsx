import React from 'react';
import Apple from '../images/Apple.png';
import Play from '../images/Play.png';
import Group from '../images/Group.png';
import './Componentfour.css';

const Componentfour = () => {
  return (
    <div className="flex-container">
      <div className="component-four">
        <div className="design">Design</div>
        <div className="user-friendly-app">User Friendly App</div>
        <div className="lorem-ipsum">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          <br />
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </div>
        {/* <div className="button-container">
          <button className="appstore-button">
            <img src={Apple} alt="Apple" /> Apple Store
          </button>
          <button className="playstore-button">
            <img src={Play} alt="Play" /> Play Store
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Componentfour;
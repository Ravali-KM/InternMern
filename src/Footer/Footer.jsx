import React from 'react';
import './Footer.css';

import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import Subvector from "../assets/SubVector.png";



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <div className="logo-space">Logo Space</div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <h5>Subscribe to get latest news</h5>
        <div class="email-input-container">
            <input type="email" class="email-input" placeholder="Email Address" />
            <button class="subscribe-button">

                <img src={Subvector} alt="Subscribe" />
            </button>
        </div>

        <div className="social-media">
          <img src={facebook}  align="left"></img>
          <img src={linkedin} align="left"></img>
          <img src={twitter} align="left"></img>
        </div>
      </div>
      <div className="footer-column">
        <div className="text-section">
          <h4>Company</h4>
          <p>About Us</p>
          <p>Meet the Team</p>
          <p>News and Media</p>
          <p>Our Projects</p>
          <p>Contact Us</p>
        </div>
      </div>
      <div className="footer-column">
        <div className="text-section">
          <h4>Services</h4>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
          <p>Lorem ipsum</p>
        </div>
      </div>
      <div className="footer-column">
        <div className="text-section">
          <h4>Support</h4>
          <p>Terms and Conditions</p>
          <p>Shipping Policy</p>
          <p>Delivery Tips</p>
          <p>Returns</p>
        </div>
      </div>
      <br></br>
      <br></br>
      <div className="footer-line"></div>
      <div className="footer-copy">&copy;2022 Laundry Shop, All Rights Reserved.</div>
    </footer>
  );
}

export default Footer;

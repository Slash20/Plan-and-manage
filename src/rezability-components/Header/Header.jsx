import React from 'react';
import './Header.css';
import facebook from './img/facebook-logo.png';
import telegram from './img/telegram-logo.png';
import twitter from './img/twitter-logo.png';
import medium from './img/m-logo.png';

const Header = function ()  {
  return (    
  <div className="header">
    <div className="header-content">
      <div className='header-left'>
        <div className="header-logo">
        </div>
        <div className="menu">
          <a href="/" className="menu-link">Home</a>
          <a href="/" className="menu-link">Blog</a>
          <a href="/" className="menu-link">Features</a>
          <a href="/" className="menu-link">Pricing</a>
          <a href="/" className="menu-link">Documentation</a>
        </div>
      </div>
      <div className='header-right'>
        <div className="social">
          <a href="/" className="social-facebok">
            <img src= {facebook} alt="facebook"/>
          </a>
          <a href="/" className="social-telegram">
            <img src= {telegram} alt="telegram"/>
          </a>
          <a href="/" className="social-twiter">
            <img src= {twitter} alt="twitter"/>
          </a>
          <a href="/" className="social-medium">
            <img src= {medium} alt="medium"/>
          </a>
        </div>
        <div className="start">
          <button className="start-btn">Get started</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Header;

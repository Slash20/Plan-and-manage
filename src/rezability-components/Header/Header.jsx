import React from 'react';
import './Header.css';

const Header = function ()  {
  return (    
  <div className="header">
    <div className="header-contetn">
      <div className="header-left">
        <div className="header-logo">
          <img src="" alt="logo"/>
        </div>
        <div className="menu">
          <a href="/" className="menu-link">Home</a>
          <a href="/" className="menu-link">Blog</a>
          <a href="/" className="menu-link">Features</a>
          <a href="/" className="menu-link">Pricing</a>
          <a href="/" className="menu-link">Documentation</a>
        </div>
      </div>
      <div className="header-right">
        <div className="social">
          <ul className="social-link">
            <li><a href="/" className="social-link-Facebook"><img src="../src/img/facebiick-logo.png" alt="Facebook"></img></a></li>
            <li><a href="/" className="social-link-Telegram"><img src="../src/img/telegram-logo" alt="Telegram"></img></a></li>
            <li><a href="/" className="social-link-Twitter"><img src="../src/img/twitter-logo" alt="Twitter"></img></a></li>
            <li><a href="/" className="social-link-M"><img src="../src/img/m-logo.png" alt="M"></img></a></li>
          </ul>
        </div>
        <div className="start-btn">
          <button>Get started</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Header;

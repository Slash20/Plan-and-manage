import React from 'react';
import './Header.css';

const Header = function ()  {
  return (    
  <div className="header">
    <div className="header-left">
      <div className="header-logo">
        <img src="#" width="80" height="80" alt="logo"/>
      </div>
      <ul className="main-nav">
        <li><a href="#">Home</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Documentation</a></li>
      </ul>
    </div>
    <div className="header-right">
      <div className="social">
        <ul className="social-link">
          <li><a href="#" className="social-link-Facebook"><img src="" alt="Facebook"></img></a></li>
          <li><a href="#" className="social-link-Telegram"><img src="" alt="Telegram"></img></a></li>
          <li><a href="#" className="social-link-Twitter"><img src="" alt="Twitter"></img></a></li>
          <li><a href="#" className="social-link-M"><img src="" alt="M"></img></a></li>
        </ul>
      </div>
      <div className="start-btn">
        <button value="Get started"/>
      </div>
    </div>
  </div>
  )
}

export default Header;

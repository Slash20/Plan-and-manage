import React from 'react';
import './Header.css';

const Header = function ()  {
  return (    
  <div class="header">
    <div class="header-left">
      <div class="header-logo">
        <img src="#" width="80" height="80" alt="logo"/>
      </div>
      <ul class="main-nav">
        <li><a href="#">Home</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Documentation</a></li>
      </ul>
    </div>
    <div class="header-right">
      <div class="social">
        <ul class="social-link">
          <li><a href="#" class="social-link-Facebook"><img src="" alt="Facebook"></img></a></li>
          <li><a href="#" class="social-link-Telegram"><img src="" alt="Telegram"></img></a></li>
          <li><a href="#" class="social-link-Twitter"><img src="" alt="Twitter"></img></a></li>
          <li><a href="#" class="social-link-M"><img src="" alt="M"></img></a></li>
        </ul>
      </div>
      <div class="start-btn">
        <button value="Get started"/>
      </div>
    </div>
  </div>
  )
}

export default Header;

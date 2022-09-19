import React from 'react';
import './Footer.css';
import Header from '../Header/Header';

const Footer = function () {
  return (
    <div className='footer'>
      <div className='footer-content'>
        <Header/>
        <div className='copyright'>
          Copyright © 2018 by Random site
        </div>
      </div>
    </div>
  )
  
}

export default Footer;

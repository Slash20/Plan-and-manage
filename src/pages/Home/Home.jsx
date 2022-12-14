import React from 'react';
import Line from '../../rezability-components/Line/Line';
import Customers from './Customers/Customers';
import DesktopAndMobilePages from './DesktopAndMobilePages/DesktopAndMobilePages';
import Newsletter from './Newsletter/Newsletter';
import './Home.css';
import SwipePanel from './SwipePanel/SwipePanel';

const Home = () => {
  return (
    <div className="Home">
      <SwipePanel />
      <Line />
      <Customers />
      <Line />
      <DesktopAndMobilePages />
      <Line />
      <Newsletter />
      <Line />
    </div>
  );
};

export default Home;
import React from 'react';
import Line from '../../rezability-components/Line/Line';
import Customers from './Customers/Customers';
import DesktopAndMobilePages from './DesktopAndMobilePages/DesktopAndMobilePages';
import Newsletter from './Newsletter/Newsletter';
import './Home.css';
import SwipePanel from './SwipePanel/SwipePanel';
import Features from './Features/Features';
import Stats from './Stats/Stats';
import GetStarted from './GetStarted/GetStarted'
import CustomerHelp from './CustomerHelp/CustomerHelp'
import Quotes from './Quotes/Quotes'


const Home = () => {
  return (
    <div className="Home">
      <SwipePanel />
      <Line />
      <Customers />
      <Line />
      <DesktopAndMobilePages />
      <Line />
      <Features />
      <Line />
      <Stats />
      <Line />
      <Quotes />
      <Line />
      <CustomerHelp />
      <Line />
      <GetStarted />
      <Line />
      <Newsletter />
      <Line />
    </div>
  );
};

export default Home;
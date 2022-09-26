import React from 'react';
import Line from '../../rezability-components/Line/Line';
import Customers from './Customers/Customers';
import './Home.css';
import SwipePanel from './SwipePanel/SwipePanel';
import Newsletter from './Newslatter/Newsletter';


const Home = () => {
  return (
    <div className="Home">
      <SwipePanel />
      <Line />
      <Customers />
      <Line />
      <Newsletter />
      <Line />
    </div>
  );
};

export default Home;

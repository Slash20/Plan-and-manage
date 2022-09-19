import React from 'react';
import CustomerLogo from '../../../rezability-components/CustomerLogo/CustomerLogo';
import './Customers.css';
import CustomerLogos from './CustomerLogos';

const Customers = () => {
  return (
    <div className="Customers">
      <div className="Customers-container">
        {CustomerLogos.map((e) => {
          return <CustomerLogo width="116.5" img={e} />;
        })}
      </div>
    </div>
  );
};

export default Customers;

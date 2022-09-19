import React from 'react';
import './CustomerLogo.css';

const CustomerLogo = (props) => {
  const { width, img } = props;
  return (
    <div className="CustomerLogo">
      <img alt="CustomerLogo" width={`${width}px`} src={img} />
    </div>
  );
};

export default CustomerLogo;

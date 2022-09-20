import React from 'react';
import './HeadText.css';

const HeadText = (props) => {
  return <h2 className={props.medium ? 'HeadTextMedium' : 'HeadText'}>{props.text}</h2>;
};

export default HeadText;

import React from 'react';
import './Newsletter.css';

const Newsletter = function () {
  return (
    <div className="newsletter">
      <div className="contentDsdas ">
        <div className="left-content">
          <div className="sign-up">Sign up for newsletter</div>
          <div className="description">
            Cu qui soleat partiendo urbanitas. Eum aperiri indoctum eu, homero
            alterum.
          </div>
        </div>
        <div className="right-content">
          <input className="email" type="email" placeholder="Email address" />
          <button className="save-me">Save me</button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

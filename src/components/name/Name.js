import React from 'react';
import './Name.css';

function MyName() {
  return (
    <div className="container">
      <div className="big-name">
        <svg className="name big-letters" viewBox="0 0 50 100" height="100">
          {/* <path
            d="m 0 90 l 0 -90"
            fill="none"
            stroke="white"
            strokeWidth="10"
            className="big-vertical-line"
          ></path>
          <path
            d="m 0 0 l 45 45 l 0 -45"
            fill="none"
            stroke="white"
            strokeWidth="10"
            className="big-v-line"
          ></path>
          <path
            d="m 0 45 q 39 0 45 11 m -45 11 q 46 0 45 -11"
            fill="none"
            stroke="white"
            strokeWidth="10"
            className="big-semicircle-line"
          ></path> */}
          <path
            d="M 2 90 L 2 0 L 45 45 L 45 0 M 2 48 C 58 18 60 97 2 71"
            /* stroke="white" */
            fill="none"
            strokeWidth="8"
            className="name initials"
          ></path>
        </svg>
        <h1 className="name first-name">icolas</h1>
        <h1 className="name last-name">ellecchia</h1>
      </div>
    </div>
  );
}

export default MyName;

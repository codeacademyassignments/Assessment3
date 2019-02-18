import './Header.component.css';
import React from 'react';

const Header = () => (
  <header className="header">
    <div className="firstDiv"><hr /></div>
    <div className="secondDiv">

      <svg width="100" height="100">

        <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="3" fill="grey" />
        <text x="50%" y="50%" textAnchor="middle" stroke="white" strokeWidth="1px" dy=".3em">BS</text>
      </svg>
    </div>
    <div className="thirdDiv"><hr /></div>
  </header>
);

export default Header;

import React from 'react';
import { Link } from 'react-router';
// import AddingRecommendation from './AddingRecommendation';

const Header = (state) => {
  return (
    <header>
      <p><Link to='/newrecommendation' className="new">New</Link></p>
      <h1><Link to="/" className="title">Local</Link></h1>
        <ul className="navBar">
          <li>Nav Bar</li>
          <li><Link to="/">Home</Link></li>
          <li>log in</li>
        </ul>
    </header>
  );
};

export default Header;

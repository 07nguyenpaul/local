import React from 'react';
import { Link } from 'react-router';
// import AddingRecommendation from './AddingRecommendation';

const Header = (state) => {
  return (
    <header>
      <h1><Link to="/" className="appName">Local</Link></h1>
        <section className="navBar">
          <Link to='/newrecommendation' className="new">New</Link>
          <Link to="/" className="home">Home</Link>
          <span className="logIn">log in</span>
        </section>
    </header>
  );
};

export default Header;

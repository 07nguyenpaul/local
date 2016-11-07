import React from 'react';
import { Link } from 'react-router';
import SignIn from '../containers/SignIn';

const Header = (state) => {
  return (
    <header>
      <h1><Link to="/" className="appName">Local</Link></h1>
        <section className="navBar">
          <SignIn />
        </section>
    </header>
  );
};

export default Header;

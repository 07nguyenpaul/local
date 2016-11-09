import React, { Component } from 'react';
import { Link } from 'react-router';

class SignIn extends Component {
  render() {
    const { status, username, logIn, logOut } = this.props;

    if (status === 'LOGGED_IN') {
      return (
        <div id="auth-panel">
          <section className="headerButtons">
            <Link to='/newrecommendation' className="new">New</Link>
            <Link to="/" className="home">Home</Link>
            <button
              className="logInButton"
              onClick={e => logOut()}
              >Log Out
            </button>
          </section>
            <p className="loggedInUser">Logged in as <strong>{username}</strong></p>
        </div>
      );
    } else {
      return (
        <div id="auth-panel">
          <section className="headerButtons LogInContainer">
            <Link to='/newrecommendation' className="new">New</Link>
            <Link to="/" className="home">Home</Link>
            <button
              className="logInButton"
              disabled={(status === 'AWAITING_AUTH_RESPONSE')}
              onClick={e => logIn()}
              >Log In
            </button>
          </section>
        </div>
      );
    }
  }
};

export default SignIn;

import React, { Component } from 'react';

class SignIn extends Component {
  render() {
    const { status, username, logIn, logOut } = this.props;

    if (status === 'LOGGED_IN') {
      return (
        <div id="auth-panel">
          <p>Logged in as <strong>{username}</strong></p>
          <button onClick={e => logOut()}>Log Out</button>
        </div>
      );
    } else {
      return (
        <div id="auth-panel">
          <p>You are not logged in.</p>
          <button
            disabled={(status === 'AWAITING_AUTH_RESPONSE')}
            onClick={e => logIn()}
          >Log In</button>
        </div>
      );
    }
  }
};

export default SignIn;

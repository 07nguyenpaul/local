import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import MainDashBoard from '../containers/MainDashBoard';
import SignIn from './SignIn';

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {};
}

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <SignIn />
        <MainDashBoard />
        <div>{this.props.children}</div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

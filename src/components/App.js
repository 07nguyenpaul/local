import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import MainDashBoard from './MainDashBoard';

function mapStateToProps(state) {
  // return an object of redux store data
  // that you'd like available in your component
  return state;
}

function mapDispatchToProps(dispatch) {
  // return an object of methods you'd like
  // to dispatch as redux actions
  return {};
}

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MainDashBoard />
        <div>{this.props.children}</div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

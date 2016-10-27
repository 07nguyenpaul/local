import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import MainDashBoard from '../containers/MainDashBoard';

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
        <MainDashBoard />
        <div>{this.props.children}</div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

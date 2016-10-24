import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';

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
        <div>{this.props.children}</div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

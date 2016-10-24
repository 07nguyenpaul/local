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
        <section className="mainDashboardWrapper">
          <input className="searchBar" type="text" placeholder="search" />
          <section className="pinnedRestuarant">
            <h3>Restaurant Name</h3>
            <p>short description</p>
          </section>
          <section className="pinnedHike">
            <h3>Trail Name</h3>
            <p>short description</p>
          </section>
        </section>
        <section className="detailSelectedPin">
          <section className="singlepinnedRestaurant">
            <h3>Restaurant Name</h3>
            <p>address</p>
            <p>raking</p>
            <p>description</p>
            <p>link</p>
          </section>
          <section className="singlepinnedHike">
            <h3>Trail Name</h3>
            <p>address</p>
            <p>difficulty</p>
            <p>description</p>
            <p>link</p>
          </section>
        </section>
        <div>{this.props.children}</div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

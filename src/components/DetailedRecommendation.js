import React from 'react';
// import {Link} from 'react-router';
import Header from './Header';

const DetailedPin = (state) => {
  return (
    <section className="detailSelectedPin">
      <Header />
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
  );
};

export default DetailedPin;

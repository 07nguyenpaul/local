import React from 'react';
import MainDashBoardCard from './MainDashBoardCard';
// import { Link } from 'react-router';

const MainDashBoard = (state) => {
  return (
    <section className="mainDashboardWrapper">
      <input className="searchBar" type="text" placeholder="search" />
      <MainDashBoardCard />
    </section>
  );
};

export default MainDashBoard;

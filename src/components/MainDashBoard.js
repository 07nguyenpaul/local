import React from 'react';
import MainDashBoardCard from './MainDashBoardCard';
import { Link } from 'react-router';

const MainDashBoard = (state) => {
  return (
    <section className="mainDashboardWrapper">
      <input className="searchBar" type="text" placeholder="search" />
      <section className="cardWrapper">
        { state.recommendation.length > 0 ?
          state.recommendation.map( singleRecommendation =>
            <MainDashBoardCard
              key={singleRecommendation.id}
              recommendationName={singleRecommendation.name}
              // recommendationLocation={singleRecommendation.location}
              recommendationDescription={singleRecommendation.description}
            />
          ) : <h2><Link to='/newrecommendation'>➕</Link></h2>
        }
      </section>
    </section>
  );
};

export default MainDashBoard;

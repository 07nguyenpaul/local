import React, { Component } from 'react';
// import MainDashBoardCard from './MainDashBoardCard';
// import { Link } from 'react-router';

class MainDashBoard extends Component {
  componentWillReceiveProps() {
    // const {fetchAllRecommendationsFromFirebase} = this.props;
    // fetchAllRecommendationsFromFirebase();
  }

  render() {
    return(
      <div>
        test
      </div>
    );
  }
}

export default MainDashBoard;


// const MainDashBoard = (state) => {
//   return (
//     <section className="mainDashboardWrapper">
//     <input className="searchBar" type="text" placeholder="search" />
//     <section className="cardWrapper">
//     { state.recommendation.length > 0 ?
//       state.recommendation.map( singleRecommendation =>
//         <MainDashBoardCard
//         key={singleRecommendation.id}
//         recommendationName={singleRecommendation.name}
//         // recommendationLocation={singleRecommendation.location}
//         recommendationDescription={singleRecommendation.description}
//         />
//       ) : <h2><Link to='/newrecommendation'>➕</Link></h2>
//     }
//     </section>
//     </section>
//   );
// };

import React, { Component } from 'react';
// import MainDashBoardCard from './MainDashBoardCard';
// import { Link } from 'react-router';
// import firebase from '../firebase';

class MainDashBoard extends Component {
  componentDidMount() {
    // const {fetchAllRecommendationsFromFirebase} = this.props;
    this.props.fetchAllRecommendationsFromFirebase();
  }

  render() {
    const { recommendation }  = this.props;
    console.log(this.props);

    return (
      <section className="mainDashboardWrapper">
        <input className="searchBar" type="text" placeholder="search" />
        <section className="cardWrapper">
        { (recommendation.data).map(rec => {
           return (
             <div>
               <h2 className="name">{rec.name}</h2>
               <p className="description">{rec.description}</p>
             </div>
           )
           })
         }
        </section>
      </section>
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

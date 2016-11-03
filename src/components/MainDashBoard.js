import React, { Component } from 'react';
// import MainDashBoardCard from './MainDashBoardCard';
// import { Link } from 'react-router';
// import firebase from '../firebase';

class MainDashBoard extends Component {
  componentDidMount() {
    // const {fetchAllRecommendationsFromFirebase} = this.props;
    this.props.fetchAllRecommendationsFromFirebase();
  }

  deleteContent(e, uid) {
    e.preventDefault()
    // console.log(this);
    // console.log(uid);
    this.props.deleteRecommendation(uid);
  }

  render() {
    const { recommendation }  = this.props;

    return (
      <section className="mainDashboardWrapper">
        <input className="searchBar" type="text" placeholder="search" />
        <section className="cardWrapper">
        { (recommendation.data).map((rec, index) => {
          let uid = rec.uid
           return (
             <div key={index} className="recCard">
               <h2 className="name">{rec.name}</h2>
               <p className="description">{rec.description}</p>
               <button onClick={(e) => this.deleteContent(e, uid)}>click me</button>
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

import React, { Component } from 'react';

class MainDashBoard extends Component {
  componentDidMount() {
    this.props.fetchAllRecommendationsFromFirebase();
  }

  goToDetails(e, rec) {
    this.props.setSelectedRecommendation(rec);
    this.context.router.transitionTo(`/detailedpin/${rec.name}`);
  }

  render() {
    const { recommendation }  = this.props;

    return (
      <section className="mainDashboardWrapper">
        <input className="searchBar" type="text" placeholder="search" />
        <section className="cardWrapper">
        {(recommendation.data).map((rec) => {
          let uid = rec.uid
          return (
            <div key={uid} className="recCard">
              <section key={uid} onClick={(e) => { this.goToDetails(e, rec) }}>
                <h2 className="name">{rec.name.toUpperCase()}</h2>
                <p className="description">{rec.description}</p>
              </section>
            </div>
          )
        })
        }
        </section>
      </section>
    );
  }
}

MainDashBoard.contextTypes = {
  router: React.PropTypes.object
}

export default MainDashBoard;

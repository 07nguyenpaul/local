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
        <section className="cardWrapper">
        {(recommendation.data).map((rec) => {
          let uid = rec.uid;

          return (
            <div key={uid} className="card transition">
              <h2 className="name transition">{rec.name}</h2>
              <p className="description">{rec.description}</p>
              <div className="cta-container transition">
                <button
                  className="cta"
                  onClick={(e) => { this.goToDetails(e, rec) }} >
                  More info...
                  </button>
              </div>
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

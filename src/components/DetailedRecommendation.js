import React, { Component } from 'react';
import Header from './Header';

class DetailedRecommendation extends Component {
  deleteContent(e, uid) {
    e.preventDefault();
    this.props.deleteRecommendation(uid);
    this.context.router.transitionTo(`/`);
  }

  render() {
    const { selectedRec } = this.props;
    const selectedRecommendationInfo = selectedRec.response &&
                                       selectedRec.response.groups[0].items[0].venue;

    return (
      <div className="DetailedRecommendation">
        <Header />
        <section className="singleDetailedRecommendation">
          <h2 className="restaurantName">{selectedRecommendationInfo.name || selectedRec.name}</h2>
          <h3 className="restaurantType">{selectedRecommendationInfo.categories[0].name}</h3>

          <section className="firstWrapper">
            <section className="address">
            <span>{selectedRecommendationInfo.location.formattedAddress[0]}</span>
            <span>{selectedRecommendationInfo.location.formattedAddress[1]}</span>
            <span>{selectedRecommendationInfo.location.formattedAddress[2]}</span>
            </section>
            <section className="links">
              <a className="restaurantURL" href={selectedRecommendationInfo.url}>Website</a>
              <a className="restaurantMenu" href={selectedRecommendationInfo.menu && selectedRecommendationInfo.menu.url}>Menu</a>
            </section>
            <section className="details">
              <div className="restaurantHours">{selectedRecommendationInfo.hours && selectedRecommendationInfo.hours.status}</div>
              <div className="restaurantNumber">{selectedRecommendationInfo.contact && selectedRecommendationInfo.contact.formattedPhone}</div>
              <div className="restaurantPrice">{selectedRecommendationInfo.price && selectedRecommendationInfo.price.message}</div>
            </section>
          </section>

          <div className="tip">{selectedRec.response.groups[0].items[0].tips[0].text}</div>
          <button className="cta delete" onClick={(e) => this.deleteContent(e, selectedRec.uid)}>Delete</button>
        </section>
      </div>
    );
  }
}

DetailedRecommendation.contextTypes = {
  router: React.PropTypes.object
};

export default DetailedRecommendation;

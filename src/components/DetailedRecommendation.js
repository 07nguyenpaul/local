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
          <h2>{selectedRecommendationInfo.name || selectedRec.name}</h2>
          <p>{selectedRecommendationInfo.categories[0].name}</p>
          <p>{selectedRecommendationInfo.price && selectedRecommendationInfo.price.message}</p>
          <section className="Address">
            <p>{selectedRecommendationInfo.location.formattedAddress[0]}</p>
            <p>{selectedRecommendationInfo.location.formattedAddress[1]}</p>
            <p>{selectedRecommendationInfo.location.formattedAddress[2]}</p>
          </section>
          <p>{selectedRecommendationInfo.hours && selectedRecommendationInfo.hours.status}</p>
          <p>{selectedRecommendationInfo.menu && selectedRecommendationInfo.menu.url}</p>
          <p>{selectedRecommendationInfo.url}</p>
          <p>{selectedRecommendationInfo.contact && selectedRecommendationInfo.contact.formattedPhone}</p>
          <p>{selectedRec.response.groups[0].items[0].tips[0].text}</p>
          <p>{selectedRec.description}</p>
          <button onClick={(e) => this.deleteContent(e, selectedRec.uid)}>Delete</button>
        </section>
      </div>
    );
  }
}

DetailedRecommendation.contextTypes = {
  router: React.PropTypes.object
};

export default DetailedRecommendation;

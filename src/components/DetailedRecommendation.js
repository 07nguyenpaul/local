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

    return (
      <div className="DetailedRecommendation">
      <Header />
        <h2>{selectedRec.name}</h2>
        <p>{selectedRec.location}</p>
        <p>{selectedRec.description}</p>
        <button onClick={(e) => this.deleteContent(e, selectedRec.uid)}>click me</button>
      </div>
    );
  }
}

DetailedRecommendation.contextTypes = {
  router: React.PropTypes.object
};

export default DetailedRecommendation;

import React, {Component} from 'react';
import Header from './Header';

class DetailedRecommendation extends Component {

  render() {
    const {recList, selectedRec} = this.props;

    return (
      <div className="DetailedRecommendation">
      <Header />
        <h2>{selectedRec.name}</h2>
        <p>{selectedRec.location}</p>
        <p>{selectedRec.description}</p>
      </div>
    );
  }
}

export default DetailedRecommendation;

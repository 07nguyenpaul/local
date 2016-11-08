import React, { Component } from 'react';

class MainDashBoard extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     venue: ''
  //   };
  // }

  componentDidMount() {
    this.props.fetchAllRecommendationsFromFirebase();
  }

  goToDetails(e, rec) {
    this.props.setSelectedRecommendation(rec);
    // console.log(this.props.setSelectedRecommendation(rec));
    this.context.router.transitionTo(`/detailedpin/${rec.name}`);
  }

  // handleInput(e) {
  //   const venueInput = e.target.value;
  //   this.setState({ venue: venueInput });
  // }
  //
  // handleSubmit(e) {
  //   e.preventDefault();
  //   this.props.fetchFood(this.state.venue);
  //   this.setState({
  //     venue: '',
  //   });
  // }

  render() {
    const { recommendation }  = this.props;

    return (
      <section className="mainDashboardWrapper">
        {/* <form className="findingVenueForm"
              onSubmit={this.handleSearch.bind(this)}
        >
          <input
            className="venueInput"
            placeholder="Search for Restaurant"
            value={this.state.venue}
            onChange={this.handleInput.bind(this)}
          />
          <input
            type="submit"
            value="Find"
            // disabled={!this.state.venue}
        />
        </form> */}
        {/* <input className="searchBar" type="text" placeholder="search" /> */}
        <section className="cardWrapper">
        {(recommendation.data).map((rec) => {
          let uid = rec.uid
          // console.log(recommendation.data[0].uid);
          // console.log(rec.uid);
          return (
            <div key={uid} className="recCard">
              <section onClick={(e) => { this.goToDetails(e, rec) }}>
                <h2 className="name">{rec.name}</h2>
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

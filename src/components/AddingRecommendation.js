import React, { Component } from 'react';
import Header from './Header';

class AddingRecommendation extends Component {
  sendContent() {
    let content= {
      id: Date.now(),
      uid:'',
      name: null || this.storeName.value,
      location: null || this.storeLocation.value,
      description: null || this.storeDescription.value,
    };
    this.props.onSubmit(content);
    this.routeToHome();
  }

  cancelAndSendHome() {
    this.routeToHome();
  }

  routeToHome() {
    this.context.router.transitionTo(`/`);
  }

  render() {
    return(
      <section className="newRecommendationContainer">
        <Header />
        <h3>Add New Recommendation</h3>
        <form className="newRecommendationForm"
              onSubmit={(e)=> {
                e.preventDefault()
                this.sendContent();
              }}
        >
          <label> Name
            <input
              className="nameInput"
              type="text"
              placeholder="Name"
              ref={(input) => this.storeName = input}
          />
          </label>
          <label> Location
            <input
              className="locationInput"
              type="text"
              placeholder="Location"
              ref={(input) => this.storeLocation = input}
            />
          </label>
          <label> Description
            <textarea
              className="descriptionInput"
              placeholder="Description"
              ref={(input) => this.storeDescription = input}
            />
          </label>
          <input type="submit" value="Save" className="saveButton" />
          <input type="submit" value="Cancel " className="cancelButton" />
        </form>
      </section>
    );
  }
}

AddingRecommendation.contextTypes = {
  router: React.PropTypes.object
};

export default AddingRecommendation;

import React, { Component } from 'react';
import Header from './Header';

class AddingRecommendation extends Component {
  sendcontent() {
    let content= {
      id: Date.now(),
      name: this.storeName.value,
      location: this.storeLocation.value,
      description: this.storeDescription.value,
    };
    // console.log(content);
    this.props.onSubmit(content);
  }

  render() {
    return(
      <section className="newRecommendationContainer">
        <Header />
        <h3>Add New Recommendation</h3>
        <form className="newRecommendationForm"
              onSubmit={(e)=> {
                e.preventDefault()
                this.sendcontent();
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
        </form>
      </section>
    );
  }
}

export default AddingRecommendation;

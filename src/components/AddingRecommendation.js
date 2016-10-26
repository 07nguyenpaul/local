import React, { Component } from 'react';
import Header from './Header';

class AddingRecommendation extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      location: '',
      description: ''
    };
  }

  updateProperty(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSave(e) {
    e.preventDefault();
    this.setState({
      name: '',
      location: '',
      description: ''
    });
  }

  render() {
    return(
      <section className="newRecommendationContainer">
        <Header />
        <h3>Add New Recommendation</h3>
        <form
          className="newRecommendationForm"
          onSubmit={this.handleSave.bind(this)}
        >
          <label>
            Name
            <input
              className="nameInput"
              type="text"
              placeholder="Name"
              value={this.state.name}
              onChange={event => this.updateProperty(event)}
            />
          </label>
          <label>
            Location
            <input
              className="locationInput"
              type="text"
              placeholder="Location"
              value={this.state.location}
              onChange={event => this.updateProperty(event)}
            />
          </label>
          <label>
            Description
            <textarea
              className="descriptionInput"
              placeholder="Description"
              value={this.state.description}
              onChange={event => this.updateProperty(event)}
            />
          </label>
          <input type="submit" value="Save" className="saveButton" />
        </form>
      </section>
    );
  }
}

export default AddingRecommendation;

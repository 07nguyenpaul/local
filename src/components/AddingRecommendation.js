import React, { Component } from 'react';

class AddingRecommendation extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      description: ''
    };
  }

  handleNameInput(e) {
    const nameInput = e.target.value;
    this.setState({ name: nameInput});
  }

  handleDescriptionInput(e) {
    const descriptionInput = e.target.value;
    this.setState({ description: descriptionInput});
  }

  handleSave(e) {
    e.preventDefault();
    this.setState({
      name: '',
      description: ''
    });
  }

  render() {
    return(
      <section className="newRecommendationContainer">
        <h3>Add New Recommendation</h3>
        <form className="newRecommendationForm" onSubmit={this.handleSave.bind(this)}>
          <label>
            Name
            <input
              className="nameInput"
              type="text"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleNameInput.bind(this)}
            />
          </label>
          <label>
            Description
            <textarea
              className="descriptionInput"
              placeholder="Description"
              value={this.state.description}
              onChange={this.handleDescriptionInput.bind(this)}
            />
          </label>
          <input type="submit" value="Save" />
        </form>
      </section>
    );
  }
}

export default AddingRecommendation;

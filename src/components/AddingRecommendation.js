import React, { Component } from 'react';
import Header from './Header';

class AddingRecommendation extends Component {
  sendContent() {
    let content= {
      id: Date.now(),
      uid:'',
      name: this.storeName.value,
      description: this.storeDescription.value,
    };
    if(content.name !== '' && content.description !== '') {
      this.props.onSubmit(content);
      this.routeToHome();
    }
  }

  routeToHome() {
    this.context.router.transitionTo(`/`);
  }

  render() {
    return(
      <section className="newRecommendationContainer">
        <Header />
        <section className="addWrapper">
          <h3 className="addRecommendation">SEARCH</h3>
          <form className="newRecommendationForm"
                onSubmit={(e)=> {
                  e.preventDefault()
                  this.sendContent();
                }}
          >
            <div className="instructions">Please fill out both forms:</div>
            <section className="container">
              <label className="label"> Name:
                <input
                  className="nameInput inputField"
                  type="text"
                  placeholder="TAG"
                  ref={(input) => this.storeName = input}
              />
              </label>
            </section>
            <section className="container">
              <label className="label"> Description:
                <textarea
                  className="descriptionInput inputField"
                  placeholder="Asian Fusion"
                  ref={(input) => this.storeDescription = input}
                />
              </label>
            </section>
            <section className="formButtonWrapper">
              <input type="submit" value="Save" className="cta saveButton" />
              <input type="submit" value="Cancel" className="cta cancelButton" onClick={()=> this.routeToHome()} />
            </section>
          </form>
        </section>
      </section>
    );
  }
}

AddingRecommendation.contextTypes = {
  router: React.PropTypes.object
};

export default AddingRecommendation;

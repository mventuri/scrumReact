import React, { Component } from "react";

class Stakeholders extends Component {
  render() {
    return (
      <div className="col-xs-12 col-md-3 card">
        <div className="card-body">
          <img
            class="card-img-top"
            src="https://images.unsplash.com/photo-1553640849-9cc4fea9735b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt="Card image cap"
          />
          <h5 class="card-title"> Stakeholders </h5>{" "}
          <p class="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card 's content.{" "}
          </p>{" "}
          <a href="#" class="btn btn-primary">
            More{" "}
          </a>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default Stakeholders;

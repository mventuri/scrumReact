import React, { Component } from "react";

class Intro extends Component {
  render() {
    return (
      <div id="what" className="container">
        <div className="col-xs-12 animated fadeInLeft delay-6s">
          <h1> What is Scrum ? </h1>{" "}
          <p>
            Scrum is a framework within which people can address complex
            adaptive problems, while productively and creatively delivering
            products of the highest possible value. Scrum itself is a simple
            framework for effective team collaboration on complex products.Scrum
            co - creators Ken Schwaber and Jeff Sutherland have written The
            Scrum Guide to explain Scrum clearly and succinctly.This Guide
            contains the definition of Scrum.This definition consists of Scrum’
            s roles, events, artifacts, and the rules that bind them together.
          </p>{" "}
          <p>
            Scrum is:
            <ol>
              <li>Lightweight</li>
              <li>Simple to understand</li>
              <li>Difficult to master</li>
            </ol>
          </p>
        </div>{" "}
      </div>
    );
  }
}

export default Intro;

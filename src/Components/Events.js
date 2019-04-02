import React, { Component } from "react";
import Sprint from "./Sprint";
import SprintPlanning from "./SprintPlanning";
import DailyScrum from "./DailyScrum";
import SprintReview from "./SprintReview";
import SprintRetrospective from "./SprintRetrospective";

class Events extends Component {
  render() {
    return (
      <div id="events" className="container">
        <div className="col-xs-12 animated fadeInLeft delay-7s">
          <h1> Events </h1>{" "}
          <p>
            Perhaps THE most important element to Scrum and Agile is the
            enthusiasm for communication, openness and transparency. These
            factors underpin everything we do in our daily work using Agile and
            Scrum practices; they are why we value customer collaboration over
            contract negotiations and why we’re not afraid to respond to change
            as we know that feedback is important. It is with this call for open
            communication that Scrum encourages us to hold five key events
            during a Sprint, all intended to help us work efficiently and
            closely together, as well as to improve our knowledge and become
            more effective in the future.{" "}
          </p>{" "}
        </div>{" "}
        <Sprint />
        <div class="row">
          <SprintPlanning />
          <DailyScrum />
          <SprintReview />
          <SprintRetrospective />
        </div>{" "}
      </div>
    );
  }
}

export default Events;

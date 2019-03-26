import React, { Component } from "react";
import Sprint from "./Sprint";
import SprintPlanning from "./SprintPlanning";
import DailyScrum from "./DailyScrum";
import SprintReview from "./SprintReview";
import SprintRetrospective from "./SprintRetrospective";

class Events extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-xs-12">
          <h1>Events</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            risus felis, volutpat sit amet dictum in, dapibus nec enim. Sed quis
            eros et magna tempor scelerisque. Vestibulum quis urna a libero
            dapibus tristique. Vestibulum pellentesque, metus rhoncus ornare
            ornare, massa sapien placerat urna, vitae tincidunt urna ipsum in
            justo. Curabitur mattis urna quis metus vestibulum pharetra. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Vivamus feugiat congue turpis, vitae volutpat eros
            malesuada non. Mauris rhoncus cursus venenatis. Mauris sit amet nunc
            non sem cursus porttitor elementum eget turpis. Donec euismod sem in
            commodo fermentum. Phasellus elementum eu eros eu sollicitudin.
          </p>
        </div>
        <Sprint />
        <div class="row">
          <SprintPlanning />
          <DailyScrum />
          <SprintReview />
          <SprintRetrospective />
        </div>
      </div>
    );
  }
}

export default Events;

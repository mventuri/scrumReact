import React, { Component } from "react";
import Accordion from "./Accordion";

const layout = {
  width: "18rem"
};
class DailyScrum extends Component {
  render() {
    return (
      <div className="col-xs-12" style={layout}>
        <Accordion>
          <div label="Alligator Mississippiensis">
            <p>
              <strong>Common Name:</strong> American Alligator
            </p>
            <p>
              <strong>Distribution:</strong> Texas to North Carolina, United
              States
            </p>
            <p>
              <strong>Endangered Status:</strong> Currently Not Endangered
            </p>
          </div>
          <div label="Alligator Sinensis">
            <p>
              <strong>Common Name:</strong> Chinese Alligator
            </p>
            <p>
              <strong>Distribution:</strong> Eastern China
            </p>
            <p>
              <strong>Endangered Status:</strong> Critically Endangered
            </p>
          </div>
        </Accordion>
      </div>
    );
  }
}

export default DailyScrum;

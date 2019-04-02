import React, { Component } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIgloo, faCoffee } from "@fortawesome/free-solid-svg-icons";

library.add(faCoffee);

class Bottom extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-xs-12">
          <p class="credits">
            {" "}
            SPA created with{" "}
            <a target="_blank" href="https://reactjs.org/">
              React
            </a>{" "}
            and <FontAwesomeIcon icon="coffee" /> by Marco Venturi
            <br />
            Credits: Scrum.org - Atlassian.com - Thescrummaster.co.uk -
            Techopedia.com
          </p>
        </div>{" "}
      </div>
    );
  }
}

export default Bottom;

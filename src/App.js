import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo animated fadeIn" alt="logo" />
          <p>A quick intro to Roles and Events in Scrum </p>{" "}
          <a className="App-link animated bounceIn" href="#what">
            Get It Started!{" "}
          </a>{" "}
        </header>{" "}
      </div>
    );
  }
}

export default App;

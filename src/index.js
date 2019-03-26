import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Intro from "./Components/Intro";
import Roles from "./Components/Roles";
import Events from "./Components/Events";
import Bottom from "./Components/Bottom";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<Intro />, document.getElementById("intro"));
ReactDOM.render(<Roles />, document.getElementById("roles"));
ReactDOM.render(<Events />, document.getElementById("events"));
ReactDOM.render(<Bottom />, document.getElementById("footer"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

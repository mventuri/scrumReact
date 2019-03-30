import React, { Component } from "react";

class Menu extends Component {
  render() {
    return (
      <nav id="navigation" class="navbar navbar-expand-sm bg-light">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#what">
              What is Scrum?
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#roles">
              Roles In Scrum
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#events">
              Events
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Menu;

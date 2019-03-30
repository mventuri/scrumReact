import React, { Component } from "react";
import ProductOwner from "./ProductOwner";
import ScrumMaster from "./ScrumMaster";
import DevelopmentTeam from "./DevelopmentTeam";

class Roles extends Component {
  render() {
    return (
      <div id="roles" className="container">
        <div className="col-xs-12 animated fadeInRight delay-8s">
          <h1> Roles in Scrum </h1>{" "}
          <p>
            Scrum has three roles: product owner, scrum master and the
            development team members.While this is pretty clear, what to do with
            existing job titles can get confusing.Many teams ask if they need to
            change their titles when adopting scrum.The short answer is no. The
            three scrum roles describe the key responsibilities for those on the
            scrum team. They aren’t job titles. This means that any job title,
            even your existing ones, can perform one of the roles. Because the
            essence of Scrum is empiricism, self-organization, and continuous
            improvement, the three roles give a minimum definition of
            responsibilities and accountability to allow teams to effectively
            deliver work. This allows teams to take responsibility for how they
            organize and to keep improving themselves.{" "}
          </p>{" "}
          <div className="row">
            <ProductOwner />
            <ScrumMaster />
            <DevelopmentTeam />
          </div>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default Roles;

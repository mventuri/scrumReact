import React, { Component } from "react";
import ProductOwner from "./ProductOwner";
import ScrumMaster from "./ScrumMaster";
import DevelopmentTeam from "./DevelopmentTeam";
import Stakeholders from "./Stakeholders";

class Roles extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-xs-12">
          <h1> Roles in Scrum </h1>
          <p>
            Aenean iaculis nunc eget enim porta, sit amet semper arcu
            dapibus.Maecenas maximus risus eu rhoncus mollis.Donec id hendrerit
            enim.Etiam magna purus, dapibus non sollicitudin id, vulputate ut
            sem.Nullam a elementum urna.In convallis ligula in erat porttitor,
            vitae posuere diam sollicitudin.Mauris viverra, neque at bibendum
            pulvinar, lorem metus ultricies nunc, ac malesuada justo dolor
            iaculis mauris.Donec finibus, ipsum vitae bibendum mattis, nibh
            mauris sagittis magna, eu consectetur mi lacus vel velit.Etiam
            scelerisque lacinia cursus.Fusce lobortis bibendum arcu, ac tempor
            nibh feugiat nec.Sed pulvinar rhoncus mi, in rhoncus eros
            ullamcorper quis.Nunc pellentesque diam sit amet tempus laoreet.
          </p>
          <div className="row">
            <ProductOwner />
            <ScrumMaster />
            <DevelopmentTeam />
            <Stakeholders />
          </div>
        </div>
      </div>
    );
  }
}

export default Roles;

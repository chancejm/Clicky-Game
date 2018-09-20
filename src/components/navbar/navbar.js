import React from "react";
import "./navbar.css";

class Navbar extends React.Component {
  constructor(props) {
    super()
    this.state = {
      score: props.score
    }
  }
  
  render(props) {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo center">
            <img className="pokeball" src={require("./images/png/pokeball.png")} alt="pokeball"/>
          </a>
        </div>
      </nav>
    )
  };
}
export default Navbar;
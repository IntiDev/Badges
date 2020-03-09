import React from "react";
import "./styles/Badge.css";
import brandLogo from "../images/logo_design_bjnx.svg";
// import avatar from "../images/female_avatar_l3ey.svg";
import Gravatar from "./Gravatar";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={brandLogo} alt="Logo de la marca" />
        </div>

        <div className="Badge__section-name">
          {/* <img
            className="Badge__avatar"
            src={this.props.avatarUrl}
            alt="Avatar"
          /> */}
          <Gravatar
            className="Badge__avatar"
            email={this.props.email}
            alt="Avatar"
          />
          <h1>
            {" "}
            {this.props.firstName}<br /> {this.props.lastName}
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3> {this.props.jobTitle} </h3>
          <div> @{this.props.user} </div>
        </div>

        <div className='Badge__footer'>
          #Coding
        </div>
      </div>
    );
  }
}

export default Badge;

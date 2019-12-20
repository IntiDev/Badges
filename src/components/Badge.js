import React from "react";
import "./styles/Badge.css";
import brandLogo from "../images/logo_design_bjnx.svg";
import avatar from "../images/female_avatar_l3ey.svg";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={brandLogo} alt="Logo de la marca" />
        </div>

        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            // src="https://gravatar.com/avatar?d=identicon"
            src={avatar}
            alt="Avatar"
          />
          <h1>
            {" "}
            Nombre <br /> de la persona
          </h1>
        </div>

        <div className="Badge__section-info">
          <h3> Frontend developer </h3>
          <div> @IntiDev </div>
        </div>

        <div className='Badge__footer'>
          #Coding
        </div>
      </div>
    );
  }
}

export default Badge;

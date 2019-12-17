import React from 'react';
import brandLogo from '../images/logo_design_bjnx.svg';
import avatar from '../images/female_avatar_l3ey.svg'

class Badge extends React.Component {
  render() {
    return <div>
      <div>
        <img src={ brandLogo } alt="Logo de la marca"/>
      </div>
      
      <div>
        <img src={ avatar} alt="Avatar"/>
        <h1> Nombre <br/> de la persona</h1>
      </div>

      <div>
        <p> Frontend developer </p>
        <p> @IntiDev</p>
      </div>

      <div>
        <p> #Coding </p>
      </div>
    </div>
  }
}

export default Badge;
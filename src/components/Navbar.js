import React from 'react';
import './styles/Navbar.css';
import brandLogo from '../images/badge-header.svg';

class Navbar extends React.Component {
  render() {
    return (
      <div className='Navbar'>
        <div className='container-fluid'>
          <a className='Navbar__brand' href='/'>
            <img className='Navbar__brand-logo' src={brandLogo} alt='alt'/>
            <span className="font-weight-light"> Platzi </span>
            <span className="font-weight-bold"> Conf </span>
          </a>
        </div>
      </div>
    )
  }
}

export default Navbar;
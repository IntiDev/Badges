import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css';
import brandLogo from '../images/badge-header.svg';
import { BrowserRouter } from 'react-router-dom';

class Navbar extends React.Component {
  render() {
    return (
      <div className='Navbar'>
        <div className='container-fluid'>
        <BrowserRouter>
          <Link className='Navbar__brand' to="/">
            <img className='Navbar__brand-logo' src={brandLogo} alt='alt'/>
            <span className="font-weight-light"> Platzi </span>
            <span className="font-weight-bold"> Conf </span>
          </Link>
          </BrowserRouter>
        </div>
      </div>
    )
  }
}

export default Navbar;
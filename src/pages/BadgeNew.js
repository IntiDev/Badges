import React from 'react';
import '../components/styles';
import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';

class BadgeNew extends React.Component {
  render() {
    return (
      <>
      <div>
        <Navbar/>
        <div className='BadgeNew_hero'>
          <img className='img-fluid' src={header} alt='logo'/>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col'>
          <Badge
            avatarUrl="./images/female_avatar_l3.svg"
            // avatarUrl="https://gravatar.com/avatar?d=identicon"
            firstName="Nombre"
            lastName="Apellido"
            jobTitle="Frontend developer"
            user="Inti"
          />
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default BadgeNew;
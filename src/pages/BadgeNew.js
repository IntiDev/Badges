import React from 'react';
import './styles/BadgeNew.css';
import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component {
  state={
    form: {},
  };

  handleChange = e => {
    //2da forma
    // const nextForm = this.state.form;
    // nextForm[e.target.name] = e.target.value;

    this.setState({
      // form: {
      //   [e.target.name]: e.target.value,
      // },
      //2da forma
      // form: nextForm,
      //3ra forma
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    });
  }

  render() {
    return (
      <>
      <Navbar/>
      <div className='BadgeNew__hero'>
        <img className='img-fluid' src={header} alt='logo'/>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col-6'>
          <Badge
            avatarUrl="http://resource.intidev.info/female_avatar_l3.svg"
            firstName="Nombre"
            lastName="Apellido"
            jobTitle="Frontend developer"
            user="Inti"
          />
          </div>
          <div className='col-6'>
            <BadgeForm onChange={this.handleChange}  formValues={this.state.form} />
          </div>
        </div>
      </div>
      </>
    )
  }
}

export default BadgeNew;
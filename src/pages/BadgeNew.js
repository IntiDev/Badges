import React from "react";
import "./styles/BadgeNew.css";
import header from "../images/logo_conf.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import api from '../api';

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: ""
    }
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
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    this.setState({ loading: true, error: null })

    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false })
    } catch(error) {
      this.setState({ loading: false, error: error });

    }
  }

  render() {
    return (
      <>
        <div className="BadgeNew__hero">
          <img
            className="BadgeNew__hero-image img-fluid"
            src={header}
            alt="logo"
          />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-7">
              <Badge
                // avatarUrl="http://resource.intidev.info/female_avatar_l3.svg"
                firstName={this.state.form.firstName || "FIRST_NAME"}
                lastName={this.state.form.lastName || "LAST_NAME"}
                jobTitle={this.state.form.jobTitle || "JOB_TITLE"}
                email={this.state.form.email || "EMAIL"}
                user={this.state.form.twitter || "USER"}
              />
            </div>
            <div className="col-5">
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BadgeNew;

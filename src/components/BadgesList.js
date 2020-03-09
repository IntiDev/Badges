import React from 'react';
import { Link } from 'react-router-dom';
import Gravatar from '../components/Gravatar';
import './styles/BadgesList.css';

class BadgesListItem extends React.Component {
    render() {
      return (
        <div className="BadgesListItem">
          <Gravatar
            email={this.props.badge.email}
            className="BadgesListItem__avatar"
          />
          {/* <img
            className="BadgesListItem__avatar"
            src={this.props.badge.avatarUrl}
            alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`}
          /> */}

          <div>
            <strong>
              {this.props.badge.firstName} {this.props.badge.lastName}
            </strong>
            <br />@{this.props.badge.twitter}
            <br />
            {this.props.badge.jobTitle}
          </div>
        </div>
      );
    }
  }

class BadgesList extends React.Component {
    render() {
        if(this.props.badges.length === 0) {
            return (
                <div>
                    <h3> No information were found </h3>
                    <Link className='btn btn-primary'>
                        Create new badge
                    </Link>
                </div>
            );
        }

        return (
            <ul className='list-unstyled'>
                {this.props.badges.map((badge) =>{
                    return (
                        <li key={badge.id}>
                            <BadgesListItem badge={badge} />
                        </li>
                    );
                })}
            </ul>
        );
    }
};

export default BadgesList;
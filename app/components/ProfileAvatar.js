import React, { Component } from 'react';
import { User } from 'react-feather';
import Radium from 'radium';
import PropTypes from 'prop-types';

const styles = {
  button: {
    cursor: 'pointer',
    transition: 'all 0.5s ease',
    ':hover': {
      background: '#DCDCDC'
    }
  }
};

class ProfileAvatar extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <User />
      </div>
    );
  }
}

ProfileAvatar.propTypes = {
  id: PropTypes.number.isRequired
};

ProfileAvatar = Radium(ProfileAvatar);

export default ProfileAvatar;

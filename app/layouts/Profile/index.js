import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { Button, ButtonGroup } from 'reactstrap';
import PropTypes from 'prop-types';

import './index.less';

export default class Profile extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return this.props.username === '' ? (
      <Redirect to="/login"/>
    ) : (
      <div>
        {this.props.username}
      </div>
    );
  }
}

Profile.propTypes = {
 username: PropTypes.string.isRequired
};

Profile.defaultProps = {
 username: ''
}

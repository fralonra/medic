import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { Button, ButtonGroup } from 'reactstrap';
import PropTypes from 'prop-types';

const styles = {

};

export default class Profile extends Component {
  constructor (props) {
    super(props);
  }

  onButtonAddClick () {

  }

  render () {
    return this.props.id <= 0 ? (
      <Redirect to="/login"/>
    ) : (
      <div>
      </div>
    );
  }
}

Profile.propTypes = {
 id: PropTypes.number.isRequired
};

Profile.defaultProps = {
 id: -1
}

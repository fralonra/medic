import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import PropTypes from 'prop-types';

const styles = {

};

export default class Entry extends Component {
  constructor (props) {
    super(props);
  }

  onButtonAddClick () {

  }

  render () {
    return (
      <div>
      </div>
    );
  }
}

Entry.propTypes = {
  id: PropTypes.string.isRequired
};

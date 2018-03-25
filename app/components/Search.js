import React, { Component } from 'react';
import {
  Row,
  Input } from 'reactstrap';
import FeatherButton from './FeatherButton';
import PropTypes from 'prop-types';

const styles = {
  search: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    maxWidth: '400px',
    padding: '0.5rem'
  },
  submit: {
    padding: '0.5rem'
  }
};

export default class Search extends Component {
  constructor (props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onInputChange () {

  }

  onSubmit () {

  }

  render () {
    return (
      <div style={styles.search}>
        <Input style={styles.input} placeholder="Go for it" onChange={this.onInputChange} />
        <FeatherButton icon="Search" style={styles.submit} />
      </div>
    );
  }
}

Search.propTypes = {

}

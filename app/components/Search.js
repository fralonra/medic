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
  }
};

class Search extends Component {
  constructor (props) {
    super(props);

    this.state = {
      query: ''
    };
  }

  onQueryChange (e) {
    this.setState({
      query: e.target.value
    });
  }

  render () {
    const { onSubmit } = this.props;
    return (
      <div style={styles.search}>
        <Input style={styles.input} placeholder="Go for it" onChange={(e) => {this.onQueryChange(e)}}/>
        <FeatherButton icon="Search" onClick={() => {onSubmit(this.state.query)}} style={styles.submit}/>
      </div>
    );
  }
}

Search.propTypes = {
  onSubmit: PropTypes.func
}

export default Search;

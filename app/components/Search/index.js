import React, { Component } from 'react';
import {
  Row,
  Input } from 'reactstrap';
import FeatherButton from '../FeatherButton';
import PropTypes from 'prop-types';

import './index.less';

const styles = {
  submit: {
    borderRadius: 0
  },
  submitIn: {
    position: 'absolute',
    right: 0
  }
};

class Search extends Component {
  constructor (props) {
    super(props);

    this.state = {
      query: props.value
    };
  }

  onQueryChange (e) {
    this.setState({
      query: e.target.value
    });
  }

  render () {
    const { style, onSubmit, iconPosition } = this.props;
    const { query } = this.state;
    return (
      <div className="search-wrapper">
        <Input className="search-input" placeholder="Go for it" value={query} onChange={(e) => {this.onQueryChange(e)}} />
        <FeatherButton style={iconPosition === 'in' ?
          Object.assign(styles.submit, styles.submitIn) :
          styles.submit} icon="Search" onClick={() => {onSubmit(this.state.query)}} style={styles.submit}/>
      </div>
    );
  }
}

Search.propTypes = {
  value: PropTypes.string,
  onSubmit: PropTypes.func,
  iconPosition: PropTypes.oneOf(['in', 'out'])
}

export default Search;

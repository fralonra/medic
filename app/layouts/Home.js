import React, { Component } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

import { Search } from 'APP/components';

const styles = {
  page: {
    display: 'flex',
    flexFlow: 'column',
    padding: '1rem',
    margin: '0 auto',
    textAlign: 'center'
  },
};

export default class Home extends Component {
  constructor (props) {
    super(props);
  }

  onButtonAddClick () {

  }

  render () {
    return (
      <div style={styles.page}>
        <h1>Medic</h1>
        <p>Your open source dictionary online</p>
        <Search />
      </div>
    );
  }
}

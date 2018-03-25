import React, { Component } from 'react';

import { style } from 'APP/config';

const styles = {
  footer: {
    flex: '0 0 auto',
    background: style.background.footer
  },
};

export default class Footer extends Component {
  constructor (props) {
    super(props);
  }

  onButtonAddClick () {

  }

  render () {
    return (
      <div style={styles.footer}>
      </div>
    );
  }
}

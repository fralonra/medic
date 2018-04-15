import React, { Component } from 'react';

import { style } from 'APP/config';

const styles = {
  footer: {
    background: style.background.footer
  }
};

const yearOfStart = 2018;
const yearOfNow = new Date().getFullYear();

class Footer extends Component {
  constructor (props) {
    super(props);
  }

  onButtonAddClick () {

  }

  render () {
    return (
      <div className="footer" style={styles.footer}>
        {yearOfNow === yearOfStart ?
          yearOfNow :
          `${yearOfStart}-${yearOfNow}`
        }
      </div>
    );
  }
}

export default Footer;

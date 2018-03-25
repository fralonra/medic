import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types';

const styles = {
  dropdown: {
    cursor: 'pointer',
    transition: 'all 0.5s ease',
    ':hover': {
      background: '#DCDCDC'
    }
  },
  menu: {

  }
};

class DropdownMenu extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div>
        <div style={styles.dropdown}></div>
        <div style={styles.menu}></div>
      </div>
    );
  }
}

DropdownMenu.propTypes = {

};

DropdownMenu = Radium(DropdownMenu);

export default DropdownMenu;

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DropdownMenu extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { children } = this.props;
    return (
      <div className="cpn-dropdown-menu">
        <div className="cpn-dropdown-menu-content">
          {children}
        </div>
      </div>
    );
  }
}

DropdownMenu.propTypes = {

};

export default DropdownMenu;

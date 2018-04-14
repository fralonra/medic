import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DropdownToggle extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { children } = this.props;
    return (
      <div className="cpn-dropdown-toggle">
        {children}
      </div>
    );
  }
}

DropdownToggle.propTypes = {

};

export default DropdownToggle;

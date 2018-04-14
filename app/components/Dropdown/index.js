import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.less';

class Dropdown extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { children } = this.props;
    return (
      <div className="cpn-dropdown">
        {children}
      </div>
    );
  }
}

Dropdown.propTypes = {

};

export default Dropdown;

import React, { Component } from 'react';
import { NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const styles = {
  item: {
    margin: '0 0.5rem'
  },
  link: {
    textDecoration: 'none'
  }
};

class NavLink extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <NavItem style={styles.item}>
        <Link style={styles.link} to={this.props.to}>{this.props.children}</Link>
      </NavItem>
    );
  }
}

NavLink.propTypes = {
  to: PropTypes.string.isRequired
}

NavLink.defaultProps = {
  to: '/'
}

export default NavLink;

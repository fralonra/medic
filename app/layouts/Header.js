import React, { Component } from 'react';
import {
  Row,
  Nav, Navbar, NavbarBrand, NavItem } from 'reactstrap';
import PropTypes from 'prop-types';

import { Dropdown, DropdownMenu, DropdownToggle, NavLink } from 'APP/components';
import { navRoute as routes } from 'APP/routes';
import { style } from 'APP/config';

const styles = {
  header: {
    background: style.background.header
  }
};

class Header extends Component {
  constructor (props) {
    super(props);
  }

  getParamFromProp (param) {
    const params = typeof param === 'object' ? param : Array.of(param);
    let result = this.props;
    params.forEach(p => {
      result = result[p];
    });
    return result;
  }

  render () {
    const { user, logout } = this.props;
    return (
      <Navbar className="header" style={styles.header}>
        <NavbarBrand href="/">medic</NavbarBrand>
        <Row>
          <Nav className="header-navbar">
            {routes.map((route, index) => {
              const param = route.paramFromProp ? this.getParamFromProp(route.paramFromProp) : '';
              return (
                <NavLink key={index} to={route.paramFromProp ?
                  `${route.basicPath}/${param}` :
                  route.path}>{route.name}
                </NavLink>
              );
            })}
            {!user.name ? (
              <NavLink to='/login'>Login</NavLink>
            ) : (
              <Dropdown>
                <DropdownToggle>
                  <NavLink to={`/profile/${user.name}`}>{user.name}</NavLink>
                </DropdownToggle>
                <DropdownMenu>
                  <div onClick={() => {logout()}}>Logout</div>
                </DropdownMenu>
              </Dropdown>
            )}
          </Nav>
        </Row>
      </Navbar>
    );
  }
}

Header.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func
};

export default Header;

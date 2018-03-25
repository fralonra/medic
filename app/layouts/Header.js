import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Row,
  Navbar, NavbarBrand, Nav } from 'reactstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import { navRoute as routes } from 'APP/routes';
import { style } from 'APP/config';

const styles = {
  header: {
    flex: '0 0 auto',
    background: style.background.header,
    padding: '1rem'
  },
  navbar: {
    width: '30%',
    minWidth: '200px',
    maxWidth: '400px'
  },
  navitem: {
    margin: '0 0.5rem'
  },
  navlink: {
    textDecoration: 'none'
  }
};

class Header extends Component {
  constructor (props) {
    super(props);
  }

  getParamFromState (param) {
    const params = typeof param === 'object' ? param : Array.of(param);
    let result = this.props;
    params.forEach(p => {
      result = result[p];
    });
    return result;
  }

  onButtonAddClick () {

  }

  render () {
    return (
      <Navbar style={styles.header}>
        <NavbarBrand href="/">medic</NavbarBrand>
        <Row style={styles.navbar}>
          {routes.map((route, index) => {
            const param = route.paramFromState ? this.getParamFromState(route.paramFromState) : '';
            return (
              <Nav style={styles.navitem} key={index}>
                <Link style={styles.navlink} to={route.paramFromState ?
                  `${route.basicPath}/${param}` :
                  route.path}>{route.name}</Link>
              </Nav>
            );
          })}
          <Nav style={styles.navitem}>
            {this.props.user.id <= 0 ? (
              <Link to='/login'>Login</Link>
            ) : (
              <Link to={`/profile/${this.props.user.id}`}>{this.props.user.name}</Link>
            )}
          </Nav>
          {this.props.user.id > 0 &&
            <Nav style={styles.navitem}>
              <Link to={'/logout'}>Logout</Link>
            </Nav>
          }
        </Row>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  };
};

export default connect(
  mapStateToProps
)(Header);

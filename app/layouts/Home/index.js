import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container,
  Nav, Navbar } from 'reactstrap';

import { NavLink, Search } from 'APP/components';

import './index.less';

class Home extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    const { search } = this.props;
    return (
      <Container className="home" fluid>
        <Navbar>
          <Nav navbar>
          </Nav>
        </Navbar>
        <h1>Medic</h1>
        <p>Your open source dictionary online</p>
        <Search onSubmit={(query) => {search(query)}}/>
      </Container>
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
)(Home);

import React, { Component } from 'react';
import { Container,
  Nav, Navbar } from 'reactstrap';
import { withRouter } from 'react-router-dom';

import { Search } from 'APP/components';

import './index.less';

class Home extends Component {
  constructor (props) {
    super(props);
  }

  search (query) {
    if (query === '') return;
    this.props.history.push(`/query/${query}`);
  }

  render () {
    return (
      <Container className="home" fluid>
        <Navbar>
          <Nav navbar>
          </Nav>
        </Navbar>
        <h1>Medic</h1>
        <p>Your open source dictionary online</p>
        <Search onSubmit={(query) => {this.search(query)}}/>
      </Container>
    );
  }
}

export default withRouter(Home);

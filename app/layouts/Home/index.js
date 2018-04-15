import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container,
  Nav, Navbar } from 'reactstrap';
import { withRouter } from 'react-router-dom';

import { Search } from 'APP/components';
import actions from 'APP/store/actions';

import './index.less';

class Home extends Component {
  constructor (props) {
    super(props);
  }

  search (query) {
    this.props.setKeyword(query);
    this.props.history.push('/query');
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

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    setKeyword: (payload) => {
      dispatch(actions.queryKeywordSet(payload));
    }
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Home));

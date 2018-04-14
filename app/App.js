import React, { Component } from 'react';
import { connect, Provider } from 'react-redux';
import { Container, Row, Col, Button } from 'reactstrap';
import { BrowserRouter as Router } from 'react-router-dom';
import { hot } from 'react-hot-loader';

import store from 'APP/store';
import actions from 'APP/store/actions';
import { authTypes } from 'APP/store/types';
import { Content, Header, Footer, ErrorBoundary } from 'APP/layouts';

class Core extends React.Component {
  constructor (props) {
    super(props);
  }

  componentDidMount() {
    this.props.info();
  }

  render () {
    const { user, logout } = this.props;
    return (
      <Router>
        <Container className="app" fluid>
          <Header user={user} logout={logout} />
          <Content />
          <Footer />
        </Container>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    info: () => {
      dispatch(actions.userAuth({
        type: authTypes.INFO
      }));
    },
    logout: () => {
      dispatch(actions.userAuth({
        type: authTypes.LOGOUT
      }));
    }
  };
};

const CoreComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Core);

class App extends Component {
  render () {
    return (
      <ErrorBoundary>
        <Provider store={store}>
          <CoreComponent />
        </Provider>
      </ErrorBoundary>
    );
  }
}

export default hot(module)(App);

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Container, Row, Col, Button } from 'reactstrap';
import { BrowserRouter as Router } from 'react-router-dom';

import store from 'APP/store';
import { Content, Header, Footer } from 'APP/layouts';

import 'ROOT/node_modules/bootstrap/dist/css/bootstrap.css';

const styles = {
  app: {
    display: 'flex',
    flexFlow: 'column',
    padding: 0
  }
};

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Container style={styles.app} fluid>
            <Header />
            <Content />
            <Footer />
          </Container>
        </Router>
      </Provider>
    );
  }
}

const root = document.getElementById('app');
ReactDOM.render(<App />, root);

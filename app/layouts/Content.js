import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routes from 'APP/routes';
import { style } from 'APP/config';

const styles = {
  content: {
    flex: '1 1 auto',
    background: style.background.content
  },
};

export default class Content extends Component {
  constructor (props) {
    super(props);
  }

  onButtonAddClick () {

  }

  render () {
    return (
      <Switch style={styles.content}>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </Switch>
    );
  }
}

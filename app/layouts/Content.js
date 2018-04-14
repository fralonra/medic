import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routes from 'APP/routes';
import { style } from 'APP/config';

import './index.less';

const styles = {
  content: {
    background: style.background.content
  }
};

export default class Content extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="content" style={styles.content}>
        <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
        </Switch>
      </div>
    );
  }
}

import React from 'react';

import { Entry, Query, Login, Profile } from 'APP/layouts';

const routes = [{
  name: 'Entry',
  path: '/e/:entry',
  component: ({ match }) => <Entry title={match.params.entry} />
}, {
  name: 'Query',
  path: '/query',
  component: () => <Query />
}, {
  name: 'Login',
  path: '/login',
  component: () => <Login />
}, {
  name: 'Profile',
  basicPath: '/profile',
  paramFromProp: ['user', 'name'],
  path: '/profile/:username',
  navs: true,
  component: ({ match }) => <Profile username={match.params.username} />
}];

export default routes;

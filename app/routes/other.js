import React from 'react';

import { Entry, Login, Profile } from 'APP/layouts';

const routes = [{
  name: 'Entry',
  path: '/e/:entry',
  component: ({ match }) => <Entry id={match.params.entry} />
}, {
  name: 'Login',
  path: '/login',
  component: () => <Login />
}, {
  name: 'Profile',
  basicPath: '/profile',
  paramFromState: ['user', 'name'],
  path: '/profile/:username',
  navs: true,
  component: ({ match }) => <Profile username={match.params.username} />
}];

export default routes;

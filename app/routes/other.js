import React from 'react';

import { Entry, Login, Profile } from 'APP/layouts';

const routes = [{
  name: 'Entry',
  path: '/e/:id',
  component: ({ match }) => <Entry id={match.params.entry} />
}, {
  name: 'Login',
  path: '/login',
  component: () => <Login />
}, {
  name: 'Profile',
  basicPath: '/profile',
  paramFromState: ['user', 'id'],
  path: '/profile/:id',
  navs: true,
  component: ({ match }) => <Profile id={Number(match.params.id)} />
}];

export default routes;

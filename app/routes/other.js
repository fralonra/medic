import React from 'react';

import { Entry, Editor, Query, Login, Profile } from 'APP/layouts';

const routes = [{
  name: 'Entry',
  path: '/e/:entry',
  component: ({ match }) => <Entry title={match.params.entry} />
}, {
  name: 'Edit',
  path: '/edit/:entry',
  component: ({ match }) => <Editor title={match.params.entry} />
}, {
  name: 'Query',
  path: '/query/:keyword',
  component: ({ match }) => <Query keyword={match.params.keyword} />
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

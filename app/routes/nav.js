import React from 'react';

import { About, Home } from 'APP/layouts';

const routes = [{
  name: 'Home',
  path: '/',
  exact: true,
  component: () => <Home />
}, {
  name: 'About',
  path: '/about',
  component: () => <About />
}];

export default routes;

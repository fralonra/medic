import global from './global';
import auth from './auth';

import { types as globalTypes } from './global';
import { types as authTypes } from './auth';

export const actionTypes = {
  ...globalTypes,
  ...authTypes
};

const actions = {
  ...global,
  ...auth
};

export default actions;

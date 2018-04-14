import global from './global';
import auth from './auth';
import query from './query';

import { types as globalTypes } from './global';
import { types as authTypes } from './auth';
import { types as queryTypes } from './query';

export const actionTypes = {
  ...globalTypes,
  ...authTypes,
  ...queryTypes
};

const actions = {
  ...global,
  ...auth,
  ...query
};

export default actions;

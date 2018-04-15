import global from './global';
import auth from './auth';
import entry from './entry';
import query from './query';

import { types as globalTypes } from './global';
import { types as authTypes } from './auth';
import { types as entryTypes } from './entry';
import { types as queryTypes } from './query';

export const actionTypes = {
  ...globalTypes,
  ...authTypes,
  ...entryTypes,
  ...queryTypes
};

const actions = {
  ...global,
  ...auth,
  ...entry,
  ...query
};

export default actions;

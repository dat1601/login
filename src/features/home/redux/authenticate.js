// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import {
  HOME_AUTHENTICATE,
} from './constants';

export function authenticate() {
  return {
    type: HOME_AUTHENTICATE,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case HOME_AUTHENTICATE:
      return {
        ...state,
        isAuthenticated: true,
        redirectToReferrer: true,
      };

    default:
      return state;
  }
}

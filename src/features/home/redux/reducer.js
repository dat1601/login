import initialState from './initialState';
import { reducer as submitReducer } from './submit';
import { reducer as authenticateReducer } from './authenticate';
import { reducer as logoutReducer } from './logout';

const reducers = [
  submitReducer,
  authenticateReducer,
  logoutReducer,
];

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    // Handle cross-topic actions here
    default:
      newState = state;
      break;
  }
  /* istanbul ignore next */
  return reducers.reduce((s, r) => r(s, action), newState);
}

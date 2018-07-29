import {
  HOME_AUTHENTICATE,
} from '../../../../src/features/home/redux/constants';

import {
  authenticate,
  reducer,
} from '../../../../src/features/home/redux/authenticate';

describe('home/redux/authenticate', () => {
  it('returns correct action by authenticate', () => {
    expect(authenticate()).toHaveProperty('type', HOME_AUTHENTICATE);
  });

  it('handles action type HOME_AUTHENTICATE correctly', () => {
    const prevState = {};
    const state = reducer(
      prevState,
      { type: HOME_AUTHENTICATE }
    );
    // Should be immutable
    expect(state).not.toBe(prevState);

    // TODO: use real case expected value instead of {}.
    const expectedState = {};
    expect(state).toEqual(expectedState);
  });
});

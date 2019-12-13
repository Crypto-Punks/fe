import { 
  getSession,
  getSessionId,
  getSessionUsername,
  getSessionLoading,
  getSessionError
} from '../sessionSelectors';

describe('session selectors', ()=> {

  const state = {
    session: {
      _id: 1,
      username: 'joe',
      loading: true,
      error: 'err'
    }
  };

  it('getSession gets the correct piece of state', () => {
    expect(getSession(state)).toEqual(state.session);
  });
  it('getSessionId gets the correct piece of state', () => {
    expect(getSessionId(state)).toBe(1);
  });
  it('getSessionUsername gets the correct piece of state', () => {
    expect(getSessionUsername(state)).toBe('joe');
  });
  it('getSessionLoading gets the correct piece of state', () => {
    expect(getSessionLoading(state)).toBe(true);
  });
  it('get session gets the correct piece of state', () => {
    expect(getSessionError(state)).toBe('err');
  });
});

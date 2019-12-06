import { 
  SET_SESSION,
  SET_SESSION_LOADING,
  SET_SESSION_ERROR,
  CLEAR_SESSION_ERROR,
  SET_SESSION_SIGN_OUT,
} from '../sessionActions';

describe('Session Actions', ()=> {

  it('SET_SESSION equals the correct string', () => {
    expect(SET_SESSION).toBe('SET_SESSION');
  });

  it('SET_SESSION_LOADING equals the correct string', () => {
    expect(SET_SESSION_LOADING).toBe('SET_SESSION_LOADING');
  });

  it('SET_SESSION_ERROR equals the correct string', () => {
    expect(SET_SESSION_ERROR).toBe('SET_SESSION_ERROR');
  });

  it('SET_SESSION_SIGN_OUT equals the correct string', () => {
    expect(SET_SESSION_SIGN_OUT).toBe('SET_SESSION_SIGN_OUT');
  });

  it('CLEAR_SESSION_ERROR equals the correct string', () => {
    expect(CLEAR_SESSION_ERROR).toBe('CLEAR_SESSION_ERROR');
  });
  
});

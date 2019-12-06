export const getSession = state => state.session;
export const getSessionId = state => getSession(state)._id;
export const getSessionUsername = state => getSession(state).username;
export const getSessionLoading = state => getSession(state).loading;
export const getSessionError = state => getSession(state).error;

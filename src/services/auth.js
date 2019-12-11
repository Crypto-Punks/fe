import { post, get } from './request';
import { baseUrl } from './dbUrl';

const AUTH_URL = `${baseUrl}/api/v1/auth`;

export const signup = (username, password) => post(`${AUTH_URL}/signup`, 
  { username, password });

export const logIn = (username, password) => post(`${AUTH_URL}/login`,
  { username, password });

export const signOut = () => get(`${AUTH_URL}/signout`);

export const verifySession = () => get(`${AUTH_URL}/verify`);

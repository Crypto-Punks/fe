import { post, get } from './request';
import { baseUrl } from './dbUrl';

const SAFARI_AUTH_URL = `${baseUrl}/api/v1/safari-auth`;


export const safariSignUp = (username, password) => post(`${SAFARI_AUTH_URL}/signup`, { username, password });
export const safariLogIn = (username, password) => post(`${SAFARI_AUTH_URL}/login`, { username, password });
export const safariSignOut = () => get(`${SAFARI_AUTH_URL}/signout`);
export const safariVerifySession = () => get(`${SAFARI_AUTH_URL}/verify`);

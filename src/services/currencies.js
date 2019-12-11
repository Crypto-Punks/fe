import { get } from './request';
import { baseUrl } from './dbUrl';

const CURRENCY_URL = `${baseUrl}/api/v1/currencies`;

export const getAllCurrencies = () => get(`${CURRENCY_URL}/all`);
export const getCoinById = (id) => get(`${CURRENCY_URL}/${id}`);
export const getTop100Currencies = () => get(CURRENCY_URL);
export const getInvestedList = () => get(`${CURRENCY_URL}/invested`);
export const getWatchList = () => get(`${CURRENCY_URL}/watched`);
export const getPriceHistory = (id) => get(`${CURRENCY_URL}/history/${id}/d1`);
export const getSearchCall = query => get(`${CURRENCY_URL}/search/${query}`);


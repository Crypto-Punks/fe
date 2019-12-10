
import { get } from './request';
import { baseUrl } from './dbUrl';

const CURRENCY_URL = `${baseUrl}/api/v1/currencies`;

export const getAllCurrencies = () => get(`${CURRENCY_URL}/all`);
export const getTop100Currencies = () => get(CURRENCY_URL);
export const getCoinById = (id) => get(`${CURRENCY_URL}/${id}`);
export const getWatchList = () => get(`${CURRENCY_URL}/watched`);
export const getInvestedList = () => get(`${CURRENCY_URL}/invested`);
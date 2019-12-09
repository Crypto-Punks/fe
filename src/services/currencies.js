
import { get } from './request';
import { baseUrl } from './dbUrl';

const CURRENCY_URL = `${baseUrl}/api/v1/currencies`;

export const getCurrencies = () => get(`${CURRENCY_URL}/all`);
export const getTop100Currencies = () => get(CURRENCY_URL);

export const getCoinInfo = (id) => get(`${CURRENCY_URL}/${id}`);

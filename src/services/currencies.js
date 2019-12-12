import { get } from './request';
import { baseUrl } from './dbUrl';

const CURRENCY_URL = `${baseUrl}/api/v1/currencies`;

export const getAllCurrencyIds = () => get(`${CURRENCY_URL}/all-ids`);

export const getTop100Currencies = () => get(`${CURRENCY_URL}/100`);

export const getInvestedList = () => get(`${CURRENCY_URL}/invested`);

export const getCoinInfoById = (id) => get(`${CURRENCY_URL}/${id}`);

export const getCoinPriceById = (id) => get(`${CURRENCY_URL}/price/${id}`);


//error handling
export const getSearchCall = query => get(`${CURRENCY_URL}/search/${query}`);

export const getPriceHistory = (id, interval) => {

  const endTime = new Date().getTime();

  switch(interval) {
    case '1hour':
      return fetchPriceHistory(id, 'm1', endTime - 3600000, endTime, CURRENCY_URL);
    case '1day':
      return fetchPriceHistory(id, 'm30', endTime - 86400000, endTime, CURRENCY_URL);
    case '3days':
      return fetchPriceHistory(id, 'h1', endTime - 259200000, endTime, CURRENCY_URL);
    case '1week':
      return fetchPriceHistory(id, 'h12', endTime - 604800000, endTime, CURRENCY_URL);
    case '1month':
      return fetchPriceHistory(id, 'd1', endTime - 2592000000, endTime, CURRENCY_URL);
    case '6months':
      return fetchPriceHistory(id, 'd1', endTime - 15724800000, endTime, CURRENCY_URL);
    case '1year':
      return fetchPriceHistory(id, 'd1', endTime - 31536000000, endTime, CURRENCY_URL);
    default:
      return;
  }
};

function fetchPriceHistory(id, interval, startTime, endTime, url) {
  return get(`${url}/history/${id}/${interval}/${startTime}/${endTime}`);
}

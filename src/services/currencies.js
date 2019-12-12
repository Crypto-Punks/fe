import { get } from './request';
import { baseUrl } from './dbUrl';

const CURRENCY_URL = `${baseUrl}/api/v1/currencies`;
//getCoins('all') not used yet... for transaction page
export const getAllCurrencies = () => get(`${CURRENCY_URL}/all`);

//getCoinsById needs: id:id, logo:currencySymbol, name:name, price:priceUsd
export const getInvestedList = () => get(`${CURRENCY_URL}/invested`);

//getCoinsById not used yet
export const getWatchList = () => get(`${CURRENCY_URL}/watched`);

//refactored
export const getSearchCall = query => get(`${CURRENCY_URL}/search/${query}`);

//refactored
export const getPriceHistory = (id, historyInterval) => {
  let startTime;
  switch(historyInterval) {
    case 'm1':
      return;
    case 'm30':
      return;
    case 'h1':
      return;
    case 'h12':
      return;
    case 'd1':
      return;
  }
  get(`${CURRENCY_URL}/history/${id}/${historyInterval}/${startTime}`);
};

//getCoinsById needs name:name website:website description:description
export const getCoinById = (id) => get(`${CURRENCY_URL}/${id}`);

//getCoinsById/getCoins needs id:id, logo: currencySymbol, name:name, priceUsd:priceUsd, changePercent24Hr:changePercent24Hr
export const getTop100Currencies = () => get(CURRENCY_URL);

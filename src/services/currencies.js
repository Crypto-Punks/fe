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



  let endTime = new Date().getTime();
  let startTime;

  switch(historyInterval) {
    case 'm1':
      startTime = endTime - 3600000; //one hour
      break;
    case 'm30':
      startTime = endTime - 86400000; //one day
      break;
    case 'h1':
      startTime = endTime - 259200000; //three days
      break;
    case 'h12':
      startTime = endTime - 604800000; //week
      break;
    case 'd1':
      startTime = endTime - 2592000000; //month
      break;
    case 'd1m6':
      startTime = endTime - 15724800000; //6month
      break;
    case 'd1y1':
      startTime = endTime - 31536000000; //year
      break;
    default:
      endTime = null;
  }

  historyInterval = (historyInterval === 'd1m6' || historyInterval === 'd1y1') ? 'd1' : historyInterval;

  return get(`${CURRENCY_URL}/history/${id}/${historyInterval}/${startTime}/${endTime}`);
};

//getCoinsById needs name:name website:website description:description
export const getCoinById = (id) => get(`${CURRENCY_URL}/${id}`);

//getCoinsById/getCoins needs id:id, logo: currencySymbol, name:name, priceUsd:priceUsd, changePercent24Hr:changePercent24Hr
export const getTop100Currencies = () => get(CURRENCY_URL);

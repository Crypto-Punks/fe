import { get, put } from './request';
import { addTrade } from './trades';
import { baseUrl } from './dbUrl';
const PORTFOLIO_BASE_URL = `${baseUrl}/api/v1/portfolio`;

export const fetchPortfolio = () => get(`${PORTFOLIO_BASE_URL}`);
export const changeWatchList = (watchList, coin) => {

  if(watchList.find(element => element.name === coin)) {
    const index = watchList.indexOf(watchList.find(element => element.name === coin));
    watchList.splice(index, 1);
  } 
  else watchList.push({ name: coin });

  return put(`${PORTFOLIO_BASE_URL}`, { watchList });
};

export const changeInvested = (exchangeRate, toCurrency, toCurrencyAmount, fromCurrency, fromCurrencyAmount, investedCoins) => {
  if(!investedCoins.find(element => element.name === toCurrency)) {
    investedCoins.push({ name: toCurrency, amount: toCurrencyAmount });
  } 
  else {
    investedCoins.find(element => element.name === toCurrency).amount += toCurrencyAmount;
  }
  investedCoins.find(element => element.name === fromCurrency).amount -= fromCurrencyAmount;
  if(investedCoins.find(element => element.name === fromCurrency).amount === 0) {
    investedCoins.splice(investedCoins.indexOf(investedCoins.find(element => element.name === fromCurrency)), 1);
  }
  addTrade(toCurrency, toCurrencyAmount, fromCurrency, fromCurrencyAmount, exchangeRate);
  return put(`${PORTFOLIO_BASE_URL}`, { investedCoins });
};

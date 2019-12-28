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
  if(!findCoinInInvested(investedCoins, toCurrency)) {
    investedCoins.push({ name: toCurrency, amount: toCurrencyAmount });
  } else {
    findCoinInInvested(investedCoins, toCurrency).amount += toCurrencyAmount;
  }

  findCoinInInvested(investedCoins, fromCurrency).amount -= fromCurrencyAmount;
  if(findCoinInInvested(investedCoins, fromCurrency).amount === 0) {
    investedCoins.splice(investedCoins.indexOf(findCoinInInvested(investedCoins, fromCurrency)), 1);
  }
  
  addTrade(toCurrency, toCurrencyAmount, fromCurrency, fromCurrencyAmount, exchangeRate);
  return put(`${PORTFOLIO_BASE_URL}`, { investedCoins });
};
 
function findCoinInInvested(investedCoins, currencyName) {
  return investedCoins.find(coin => coin.name === currencyName);
}

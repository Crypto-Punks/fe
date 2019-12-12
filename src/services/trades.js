import { post } from './request';
export const TRADE_BASE_URL = 'http://localhost7891/api/v1/trade';


export const addTrade = (toCurrency, toCurrencyAmount, fromCurrency, fromCurrencyAmount, exchangeRate) => {
  return post(`${TRADE_BASE_URL}`, { from_currency: { name: fromCurrency, amount: fromCurrencyAmount }, to_currency: { name: toCurrency, amount: toCurrencyAmount }, exchange_rate: exchangeRate });
};

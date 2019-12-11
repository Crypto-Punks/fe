import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getCoinById } from '../../services/currencies';

//todo make handleSubmit function

const TransactionForm = ({ handleSubmit, currencies, investedCoins }) => {
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [fromCurrencyAmount, setFromCurrencyAmount] = useState(0);
  const [fromCurrencyMax, setFromCurrencyMax] = useState(0);

  const [toCurrency, setToCurrency] = useState('BTC');
  const [toCurrencyAmount, setToCurrencyAmount] = useState(0);
  const [toCurrencyMax, setToCurrencyMax] = useState(0);

  const [exchangeRate, setExchangeRate] = useState(null);
  const [transactionValue, setTransactionValue] = useState(null);

  const currenciesElements = currencies.map(currency => {
    return <option key={currency.name} value={currency} />;
  });

  const investedCoinsElements = investedCoins.map(coin => {
    return <option key={coin.name} value={coin.name} />;
  });

  useEffect(() => {
    const max = investedCoins.find(element => element.name === fromCurrency).amount;
    setFromCurrencyMax(max);
  }, [fromCurrency]);

  useEffect(() => {
    return Promise.all([
      getCoinById(fromCurrency),
      getCoinById(toCurrency)
    ])
      .then(([fromCurrencyResult, toCurrencyResult]) => {
        setExchangeRate(fromCurrencyResult.priceUsd / toCurrencyResult.priceUsd);
      });
  }, [fromCurrency, toCurrency]);

  useEffect(() => {
    //check this calculation - depends on data
    const value = toCurrencyAmount / exchangeRate;
    setFromCurrencyAmount(value);
  }, [toCurrencyAmount]);

  useEffect(() => {
    //check this calculation - depends on data -- will this infinite loop
    const value = fromCurrencyAmount / exchangeRate;
    setToCurrencyAmount(value);
  }, [fromCurrencyAmount]);

  useEffect(() => {
    const max = fromCurrencyMax / exchangeRate;
    setToCurrencyMax(max);
  }, [toCurrency, fromCurrencyMax]);

  useEffect(() => {
    return getCoinById(fromCurrency)
      .then(fromCurrencyResult => {
        setTransactionValue(fromCurrencyResult.priceUsd * fromCurrencyAmount);
      });
  }, [fromCurrencyAmount]);



  return (
    <form onSubmit={() => handleSubmit(toCurrency, toCurrencyAmount, fromCurrency, fromCurrencyAmount, investedCoins)}>
      <label>
        I want to buy
        <input type='number' value={toCurrencyAmount} max={toCurrencyMax} onChange={event => setToCurrencyAmount(event.target.value)} />
        <select value={toCurrency} onChange={event => setToCurrency(event.target.value)}>
          {currenciesElements}
        </select>
      </label>
      <label>
        I want to use
        <input type='number' max={fromCurrencyMax} value={fromCurrencyAmount} onChange={event => setFromCurrencyAmount(event.target.value)} />
        <select value={fromCurrency} onChange={event => setFromCurrency(event.target.value)}>
          {investedCoinsElements}
        </select>
      </label>
      <section>
        <p>Exchange rate:</p>
        <input type='number' value={exchangeRate} />
      </section>
      <section>
        <p>Value of transaction (USD):</p>
        <input type='number' value={transactionValue} />
      </section>
    </form>
  );
};

TransactionForm.propTypes = {
  investedCoins: PropTypes.arrayOf(PropTypes.shape({
    logo: PropTypes.string,
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired
  })).isRequired,
  currencies: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    logo: PropTypes.string,
    rateUsd: PropTypes.number.isRequired,
    priceUsd: PropTypes.number.isRequired
  })).isRequired,
  handleSubmit: PropTypes.func.isRequired
};


export default TransactionForm;

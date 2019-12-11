import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getCoinById } from '../../services/currencies';


const TransactionForm = ({ handleSubmit, currencies, investedCoins }) => {
  const [fromCurrency, setFromCurrency] = useState('');
  const [fromCurrencyAmount, setFromCurrencyAmount] = useState(0);
  const [fromCurrencyMax, setFromCurrencyMax] = useState(0);
  
  const [toCurrency, setToCurrency] = useState('');
  const [toCurrencyAmount, setToCurrencyAmount] = useState(0);
  const [toCurrencyMax, setToCurrencyMax] = useState(0);
  
  const [exchangeRate, setExchangeRate] = useState(0);
  const [transactionValue, setTransactionValue] = useState(0);
  
  const currenciesElements = currencies.map(currency => {
    return <option key={currency} value={currency}>{currency}</option>;
  });

  const investedCoinsElements = investedCoins.map(coin => {
    return <option key={coin.id} value={coin.id}>{coin.id}</option>;
  });

  useEffect(() => {
    if(fromCurrency) {const max = investedCoins.find(element => {
      return element.id === fromCurrency; }).amount;
    setFromCurrencyMax(max);}
  }, [fromCurrency]);

  useEffect(() => {
    if(fromCurrency && toCurrency) {
      Promise.all([
        getCoinById(fromCurrency),
        getCoinById(toCurrency)
      ])
        .then(([fromCurrencyResult, toCurrencyResult]) => {
          const exchangeRate = Number(fromCurrencyResult[0].priceUsd) / Number(toCurrencyResult[0].priceUsd)
          setExchangeRate(exchangeRate);
          setFromCurrencyAmount(toCurrencyAmount / exchangeRate);
        });
    }
  }, [fromCurrency]);

  useEffect(() => {
    if(fromCurrency && toCurrency) {
      Promise.all([
        getCoinById(fromCurrency),
        getCoinById(toCurrency)
      ])
        .then(([fromCurrencyResult, toCurrencyResult]) => {
          const exchangeRate = Number(fromCurrencyResult[0].priceUsd) / Number(toCurrencyResult[0].priceUsd)
          setExchangeRate(exchangeRate);
          setToCurrencyAmount(fromCurrencyAmount * exchangeRate);
        });
    }
  }, [toCurrency]);

  useEffect(() => {
    const max = fromCurrencyMax / exchangeRate;
    setToCurrencyMax(max);
  }, [toCurrency]);

  useEffect(() => {
    if(fromCurrency) {
      getCoinById(fromCurrency)
        .then(fromCurrencyResult => {
          setTransactionValue(fromCurrencyResult[0].priceUsd * fromCurrencyAmount);
        });
    }
  }, [fromCurrency, fromCurrencyAmount]);

  useEffect(() => {
    if(toCurrency) {
      getCoinById(toCurrency)
        .then(toCurrencyResult => {
          setTransactionValue(toCurrencyResult[0].priceUsd * toCurrencyAmount);
        });
    }
  }, [toCurrency, toCurrencyAmount]);



  return (
    <form onSubmit={event => handleSubmit(event, toCurrency, toCurrencyAmount, fromCurrency, fromCurrencyAmount, investedCoins)}>
      <label>
        I want to buy
        <input 
          type='number' 
          value={toCurrencyAmount}  
          max={toCurrencyMax} 
          min={0} 
          placeholder={0.00} 
          step={.01} 
          onChange={event => {
            setToCurrencyAmount(event.target.value);
            if(exchangeRate) setFromCurrencyAmount(event.target.value / exchangeRate);
          }} 
        />
        <select 
          value={toCurrency} 
          onChange={(event) => setToCurrency(event.target.value)}>
          <option value={''} disabled hidden>Choose your To Currency</option>
 
          {currenciesElements}
        </select>
      </label>
      <label>
        I want to use
        <input 
          type='number' 
          value={fromCurrencyAmount} 
          max={fromCurrencyMax} 
          min={0} 
          placeholder={0.00} 
          step={.01} 
          onChange={event => {
            setFromCurrencyAmount(event.target.value);
            if(exchangeRate) setToCurrencyAmount(event.target.value * exchangeRate);
          }} 
        />
        <select 
          value={fromCurrency} 
          onChange={event => setFromCurrency(event.target.value)}>
          <option value={''} disabled hidden>Choose Your From Currency</option>
          {investedCoinsElements}
        </select>
      </label>
      <section>
        <p>Exchange rate:</p>
        <input 
          type='number' 
          value={exchangeRate}
          readOnly={true} 
        />
      </section>
      <section>
        <p>Value of transaction (USD):</p>
        <input 
          type='number' 
          value={transactionValue} 
          readOnly={true}
        />
      </section>
      <button>Complete Your Transaction</button>
    </form>
  );
};

TransactionForm.propTypes = {
  investedCoins: PropTypes.arrayOf(PropTypes.shape({
    logo: PropTypes.string,
    name: PropTypes.string.isRequired,
    amount: PropTypes.number,
    price: PropTypes.string.isRequired
  })).isRequired,
  currencies: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  })).isRequired,
  handleSubmit: PropTypes.func.isRequired
};


export default TransactionForm;

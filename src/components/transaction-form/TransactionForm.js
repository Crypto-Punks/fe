import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getCoinPriceById } from '../../services/currencies';
import styles from './TransactionForm.css';


const TransactionForm = ({ handleSubmit, currencies, investedCoins }) => {
  const [fromCurrency, setFromCurrency] = useState('');
  const [fromCurrencyAmount, setFromCurrencyAmount] = useState(0);
  const [fromCurrencyMax, setFromCurrencyMax] = useState(0);
  
  const [toCurrency, setToCurrency] = useState('');
  const [toCurrencyAmount, setToCurrencyAmount] = useState(0);
  const [toCurrencyMax, setToCurrencyMax] = useState(0);
  
  const [exchangeRate, setExchangeRate] = useState(0);
  const [transactionValue, setTransactionValue] = useState(0);
  
  const currenciesElements = currencies.sort().map(currency => {
    return <option key={currency} value={currency}>{currency}</option>;
  });

  const investedCoinsElements = investedCoins.sort().map(coin => {
    if(coin.name !== 'USD') return <option key={coin.name} value={coin.name}>{coin.name}</option>;
  });

  useEffect(() => {
    if(fromCurrency) {
      const max = investedCoins.find(element => element.name === fromCurrency).amount;
      setFromCurrencyMax(max);
    }
  }, [fromCurrency]);

  
  useEffect(() => {
    if(fromCurrency && toCurrency) {
      Promise.all([
        getCoinPriceById(fromCurrency),
        getCoinPriceById(toCurrency)
      ])
        .then(([fromCurrencyPrice, toCurrencyPrice]) => {
          const exchangeRate = Number(fromCurrencyPrice) / Number(toCurrencyPrice);
          setExchangeRate(exchangeRate);
          setFromCurrencyAmount(toCurrencyAmount / exchangeRate);
        });
    }
  }, [fromCurrency]);


  useEffect(() => {
    if(fromCurrency && toCurrency) {
      Promise.all([
        getCoinPriceById(fromCurrency),
        getCoinPriceById(toCurrency)
      ])
        .then(([fromCurrencyPrice, toCurrencyPrice]) => {
          const exchangeRate = Number(fromCurrencyPrice) / Number(toCurrencyPrice);
          setExchangeRate(exchangeRate);
          setToCurrencyAmount(Number(fromCurrencyAmount * exchangeRate));
        });
    }
  }, [toCurrency]);


  useEffect(() => {
    if(exchangeRate) {
      const max = fromCurrencyMax * exchangeRate;
      setToCurrencyMax(max);
    }
  }, [toCurrencyAmount, fromCurrencyMax]);


  useEffect(() => {
    if(fromCurrency) {
      getCoinPriceById(fromCurrency)
        .then(fromCurrencyPrice => {
          setTransactionValue(fromCurrencyPrice * fromCurrencyAmount);
        });
    }
  }, [fromCurrency, fromCurrencyAmount]);


  useEffect(() => {
    if(toCurrency) {
      getCoinPriceById(toCurrency)
        .then(toCurrencyPrice => {
          setTransactionValue(toCurrencyPrice * toCurrencyAmount);
        });
    }
  }, [toCurrency, toCurrencyAmount]);



  return (
    <form className={styles.TransactionForm} onSubmit={event => handleSubmit(event, exchangeRate, toCurrency, toCurrencyAmount, fromCurrency, fromCurrencyAmount, investedCoins)}>
      <label>
        I want to buy
        <input 
          type='number' 
          value={toCurrencyAmount}  
          max={toCurrencyMax} 
          min={0}
          step={'any'} 
          onChange={event => {
            setToCurrencyAmount(event.target.value);
            if(exchangeRate) setFromCurrencyAmount(event.target.value / exchangeRate);
          }} 
        />
        <select 
          value={toCurrency} 
          onChange={(event) => setToCurrency(event.target.value)}>
          <option value={''} disabled hidden>Choose your To Currency</option>
          <option key={'USD'} value={'USD'}>{'USD'}</option>
 
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
          step={'any'} 
          onChange={event => {
            setFromCurrencyAmount(event.target.value);
            if(exchangeRate) setToCurrencyAmount(event.target.value * exchangeRate);
          }} 
        />
        <select 
          value={fromCurrency} 
          onChange={event => setFromCurrency(event.target.value)}>
          <option value={''} disabled hidden>Choose Your From Currency</option>
          <option key={'USD'} value={'USD'}>{'USD'}</option>
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
    name: PropTypes.string.isRequired,
    amount: PropTypes.number,
  })).isRequired,
  currencies: PropTypes.arrayOf(PropTypes.string.isRequired),
  handleSubmit: PropTypes.func.isRequired
};


export default TransactionForm;

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
    calculateTransactionValue(fromCurrency, setTransactionValue, fromCurrencyAmount);
  }, [fromCurrency, fromCurrencyAmount]);


  useEffect(() => {
    calculateTransactionValue(toCurrency, setTransactionValue, toCurrencyAmount);
  }, [toCurrency, toCurrencyAmount]);
  
  
  useEffect(() => {
    setExchangeRateAndCurrencyAmount(fromCurrency, toCurrency, setExchangeRate, setFromCurrencyAmount, toCurrencyAmount);
  }, [fromCurrency]);


  useEffect(() => {
    setExchangeRateAndCurrencyAmount(fromCurrency, toCurrency, setExchangeRate, setToCurrencyAmount, fromCurrencyAmount, true);
  }, [toCurrency]);

  useEffect(() => {
    if(fromCurrency) {
      const max = investedCoins.find(element => element.name === fromCurrency).amount;
      setFromCurrencyMax(max);
    }
  }, [fromCurrency]);

  useEffect(() => {
    if(exchangeRate) {
      const max = fromCurrencyMax * exchangeRate;
      setToCurrencyMax(max);
    }
  }, [toCurrencyAmount, fromCurrencyMax, exchangeRate]);

  return (
    <form 
      className={styles.TransactionForm} 
      onSubmit={event => handleSubmit(event, exchangeRate, toCurrency, toCurrencyAmount, fromCurrency, fromCurrencyAmount, investedCoins)}>
      <label>
        I want to buy
        {renderInput(toCurrencyAmount, toCurrencyMax, exchangeRate, setToCurrencyAmount, setFromCurrencyAmount)}
        {renderSelect(toCurrency, setToCurrency, 'Choose Your To Currency', currenciesElements)}
      </label>
      <label>
        I want to use
        {renderInput(fromCurrencyAmount, fromCurrencyMax, exchangeRate, setFromCurrencyAmount, setToCurrencyAmount)}
        {renderSelect(fromCurrency, setFromCurrency, 'Choose Your From Currency', investedCoinsElements)}
      </label>
      <section>
        <p>Exchange rate:</p>
        {renderReadOnlyInput(exchangeRate)}
      </section>
      <section>
        <p>Value of transaction (USD):</p>
        {renderReadOnlyInput(transactionValue)}
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

function calculateTransactionValue(currency, setTransactionValue, currencyAmount) {
  if(currency) {
    getCoinPriceById(currency)
      .then(currencyPrice => {
        setTransactionValue(currencyPrice * currencyAmount);
      });
  }
}

function setExchangeRateAndCurrencyAmount(fromCurrency, toCurrency, setExchangeRate, setCurrencyAmount, currencyAmount, bool) {
  if(fromCurrency && toCurrency) {
    Promise.all([
      getCoinPriceById(fromCurrency),
      getCoinPriceById(toCurrency)
    ])
      .then(([fromCurrencyPrice, toCurrencyPrice]) => {
        const exchangeRate = fromCurrencyPrice / toCurrencyPrice;
        setExchangeRate(exchangeRate);
        setCurrencyAmount(bool ? currencyAmount * exchangeRate : currencyAmount / exchangeRate);
      });
  }
}

function renderInput(currencyAmount, currencyMax, exchangeRate, setThisCurrencyAmount, setOtherCurrencyAmount) {
  return (
    <input 
      type='number' 
      value={currencyAmount}  
      max={currencyMax} 
      min={0}
      step={'any'} 
      onChange={event => {
        setThisCurrencyAmount(Number(event.target.value));
        if(exchangeRate) setOtherCurrencyAmount(Number(event.target.value) / exchangeRate);
      }} 
    />
  );
}


function renderSelect(currency, setCurrency, placeHolder, listElements) {
  return (
    <select 
      value={currency} 
      onChange={(event) => setCurrency(event.target.value)}>
      <option value={''} disabled hidden>{placeHolder}</option>
      <option key={'USD'} value={'USD'}>{'USD'}</option>
      {listElements}
    </select>
  );
}

function renderReadOnlyInput(value) {
  return (
    <input 
      type='number' 
      value={value}
      readOnly={true} 
    />
  );
}

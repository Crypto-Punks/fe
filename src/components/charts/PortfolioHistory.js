import { Line } from 'react-chartjs-2';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { getTotals } from '../../services/total';
import { getTrades } from '../../services/trades';

const PortfolioHistory = () => {
  const [intervals, setIntervals] = useState([]);
  const [totals, setTotals] = useState([]);
  const [trades, setTrades] = useState([]);

  const PortfolioHistoryOptions = {
    title: {
      display: true,
      text: 'Portfolio History'
    },
    animation: {
      duration: 1000,
      easing: 'linear',
      showlines: true
    }
  };

  useEffect(() => {
    Promise.all([
      getTotals(),
      getTrades()
    ])
      .then(([totals, trades]) => {
        setIntervals(totals.map(item =>  moment(item.timestamp).format('MMM Do YYYY')));
        setTotals(totals.map(item => item.totals.reduce((acc, val) => {
          acc += val.value;
          return acc;
        }, 0)));
        setTrades(trades.map(({ exchange_rate, from_currency, to_currency }) => ({ exchange_rate, from_currency, to_currency })));
      });
  }, []);

  return (
    <Line data={{ labels: intervals, datasets: [{ label: 'net worth', data: totals }, { label: 'trade history', data: trades }] }} options={PortfolioHistoryOptions} /> 
  );
};

export default PortfolioHistory;

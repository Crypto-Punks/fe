import { Line } from 'react-chartjs-2';
import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { getTotals } from '../../services/total';
import { getTrades } from '../../services/trades';

const PortfolioHistory = () => {
  const [intervals, setIntervals] = useState([]);
  const [totals, setTotals] = useState([]);

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
      .then(([totals]) => {
        setIntervals(totals.map(item =>  moment(item.timestamp).format('MMM Do YYYY')));
        setTotals(totals.map(item => item.totals.reduce((acc, val) => {
          acc += val.value;
          return acc;
        }, 0)));
      });
  }, []);

  return (
    <Line data={{ 
      labels: intervals, 
      datasets: [{ 
        label: 'net worth', 
        data: totals, 
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        borderWidth: .5,
        borderColor: 'rgba(0, 0, 0, 0.2)'
      }] 
    }} 
    options={PortfolioHistoryOptions}
    /> 
  );
};

export default PortfolioHistory;

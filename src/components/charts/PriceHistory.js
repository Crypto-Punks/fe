import { Line } from 'react-chartjs-2';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getPriceHistory } from '../../services/currencies';
import moment from 'moment';
import styles from './PriceHistory.css';

const PriceHistory = ({ id, historyInterval }) => {
  const [intervals, setIntervals] = useState([]);
  const [datasets, setDatasets] = useState([]);

  const priceHistoryOptions = {
    title: {
      display: true,
      text: 'Price History'
    },
    animation: {
      duration: 1000,
      easing: 'linear',
      showlines: true
    }, 
    responsive: true,
    
    
  };

  useEffect(() => {
    getPriceHistory(id, historyInterval)
      .then(priceHistory => {
        setIntervals(priceHistory.map(item => moment(item.time).format('MMM Do YYYY')));
        setDatasets(priceHistory.map(item => item.priceUsd));
      });
  }, [historyInterval]);

  return (
    <div className={styles.PriceHistory}>
      <Line data={{
        labels: intervals,
        datasets: [{ label: 'price', data: datasets }]
      }} options={priceHistoryOptions} />
    </div>
  );
};

PriceHistory.propTypes = {
  id: PropTypes.string.isRequired,
  historyInterval: PropTypes.string.isRequired
};

export default PriceHistory;

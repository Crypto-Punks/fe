import { Line } from 'react-chartjs-2';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getPriceHistory } from '../../services/currencies';
import moment from 'moment';
import styles from './PriceHistory.css';

const PriceHistory = ({ id, historyDuration }) => {
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
    getPriceHistory(id, historyDuration)
      .then(priceHistory => {
        setIntervals(priceHistory.map(item => moment(item.time).format('MMM Do YYYY')));
        setDatasets(priceHistory.map(item => item.priceUsd));
      });
  }, [historyDuration]);

  return (
    <div className={styles.PriceHistory}>
      <Line data={{
        labels: intervals,
        datasets: [{ label: 'price', data: datasets, backgroundColor: 'rgba(255, 0, 0, 0.1)' }]
      }} options={priceHistoryOptions} />
    </div>
  );
};

PriceHistory.propTypes = {
  id: PropTypes.string.isRequired,
  historyDuration: PropTypes.string.isRequired
};

export default PriceHistory;

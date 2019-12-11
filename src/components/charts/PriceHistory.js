import { Line } from 'react-chartjs-2';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getPriceHistory } from '../../services/currencies';
import moment from 'moment';

const PriceHistory = ({ id }) => {
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
    }
  };

  useEffect(() => {
    getPriceHistory(id)
      .then(priceHistory => {
        setIntervals(priceHistory.map(item => moment(item.time).format('MMM Do YYYY')));
        setDatasets(priceHistory.map(item => item.priceUsd));
      });
  }, []);

  return (
    <Line data={{ labels: intervals, datasets: [{ label: 'price', data: datasets }] }} options={priceHistoryOptions} /> 
  );
};

PriceHistory.propTypes = {
  id: PropTypes.string.isRequired
};

export default PriceHistory;

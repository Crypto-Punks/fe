import { Line } from 'react-chartjs-2';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getPriceHistory } from '../../services/currencies';
import moment from 'moment';

const Derivative = ({ id }) => {
  const [derivativeArray, setDerivativeArray] = useState([]);
  const [intervals, setIntervals] = useState([]);

  const derivativeOptions = {
    title: {
      display: true,
      text: 'Derivative'
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
        const derivatives = priceHistory.map((element, i) => {
          if(i === 0) return (priceHistory[1 + 1].priceUsd - element.priceUsd) * 100 / (priceHistory[i + 1].time - element.time);
          return (element.priceUsd - priceHistory[i - 1].priceUsd) * 100 / (element.time - priceHistory[i - 1].time);
        });
        setDerivativeArray(derivatives);
        setIntervals(priceHistory.map(item => moment(item.time).format('MMM Do YYYY')));
      });
  }, []);
  
  return (
    <Line data={{ labels: intervals, datasets: [{ label: '% change', data: derivativeArray }] }} options={derivativeOptions} /> 
  );
};

Derivative.propTypes = {
  id: PropTypes.string.isRequired
};

export default Derivative;

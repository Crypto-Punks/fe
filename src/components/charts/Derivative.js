import { Line } from 'react-chartjs-2';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getPriceHistory } from '../../services/currencies';
import moment from 'moment';
import styles from './Derivative.css';

const Derivative = ({ id, derivativeDuration }) => {
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
    getPriceHistory(id, derivativeDuration)
      .then(priceHistory => {
        const derivatives = priceHistory.map((element, i) => {
          if(i === 0) return (priceHistory[1 + 1].priceUsd - element.priceUsd) * 100 / (priceHistory[i + 1].time - element.time);
          return (element.priceUsd - priceHistory[i - 1].priceUsd) * 100 / (element.time - priceHistory[i - 1].time);
        });
        setDerivativeArray(derivatives);
        setIntervals(priceHistory.map(item => moment(item.time).format('MMM Do YYYY')));
      });
  }, [derivativeDuration]);
  
  return (
    <div className={styles.Derivative}>
      <Line 
        data={{ 
          labels: intervals, 
          datasets: [{ 
            label: 'rate of change', 
            data: derivativeArray, 
            backgroundColor: 'rgba(255, 0, 0, 0.2)',
            borderWidth: .5,
            borderColor: 'rgba(0, 0, 0, 0.2)' 
          }] 
        }} 
        options={derivativeOptions} /> 
    </div>
  );
};

Derivative.propTypes = {
  id: PropTypes.string.isRequired,
  derivativeDuration: PropTypes.string.isRequired
};

export default Derivative;

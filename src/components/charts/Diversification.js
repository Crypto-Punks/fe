import { Pie } from 'react-chartjs-2';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Diversification = ({ investedCoins }) => {
  const [values, setValues] = useState([]);

  const DiversificationOptions = {
    title: {
      display: true,
      text: 'Diversification'
    },
    animation: {
      duration: 1000,
      animateScale: true,
    }
  };

  useEffect(() => {
    setValues(investedCoins.map(item => {
      return item.price * item.amount;
    }));
  }, [investedCoins]);

  return (
    <>
      {values.length > 0 && <Pie data={
        { labels: investedCoins.map(item => item.name),
          datasets: [{ 
            data: values, 
            backgroundColor: [
              'rgba(255, 0, 0, 0.2)', 
              'rgba(255, 165, 0, 0.2)', 
              'rgba(255, 255, 0, 0.2)', 
              'rgba(0, 128, 0, 0.2)', 
              'rgba(0, 0, 255, 0.2)', 
              'rgba(75, 0, 130, 0.2)', 
              'rgba(238, 130, 238, 0.2)',
              'rgba(255, 0, 0, 0.2)', 
              'rgba(255, 165, 0, 0.2)', 
              'rgba(255, 255, 0, 0.2)', 
              'rgba(0, 128, 0, 0.2)', 
              'rgba(0, 0, 255, 0.2)', 
              'rgba(75, 0, 130, 0.2)', 
              'rgba(238, 130, 238, 0.2)',
              'rgba(255, 0, 0, 0.2)', 
              'rgba(255, 165, 0, 0.2)', 
              'rgba(255, 255, 0, 0.2)', 
              'rgba(0, 128, 0, 0.2)', 
              'rgba(0, 0, 255, 0.2)', 
              'rgba(75, 0, 130, 0.2)', 
              'rgba(238, 130, 238, 0.2)',
              'rgba(255, 0, 0, 0.2)', 
              'rgba(255, 165, 0, 0.2)', 
              'rgba(255, 255, 0, 0.2)', 
              'rgba(0, 128, 0, 0.2)', 
              'rgba(0, 0, 255, 0.2)', 
              'rgba(75, 0, 130, 0.2)', 
              'rgba(238, 130, 238, 0.2)'
            ] 
          }]
        }
      } options={DiversificationOptions} /> }
    </>
  );
};

Diversification.propTypes = {
  investedCoins: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    logo: PropTypes.string,
    name: PropTypes.string,
    amount: PropTypes.number,
    price: PropTypes.string
  })).isRequired
};

export default Diversification;

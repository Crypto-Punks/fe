import React from 'react';
import PropTypes from 'prop-types';

const NetWorth = ({ netWorth }) => {
  return <p>Net worth: {netWorth}</p>;
};

NetWorth.propTypes = {
  netWorth: PropTypes.string
};

export default NetWorth;

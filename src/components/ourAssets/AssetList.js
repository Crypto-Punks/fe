import React from 'react';
import PropTypes from 'prop-types';
import AssetItem from './AssetItem';

const AssetList = ({ items }) => {
  const elements = items.map(item => {
    return <AssetItem key={item.name} item={item} />; 
  });
  return (
    <ul>
      {elements}
    </ul>
  );
};

AssetList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    logo: PropTypes.string,
    name: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired
  })).isRequired
};

export default AssetList;

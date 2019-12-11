import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './CoinSearchForm.css';


const CoinSearchForm = ({ handleSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <form 
      className={styles.SearchForm} 
      onSubmit={event => {
        setSearchTerm('');
        handleSubmit(event, searchTerm);
      }}>
      <input type='text' value={searchTerm} onChange={({ target }) => setSearchTerm(target.value)} />
      <button>🔍</button>
    </form>
  );
};

CoinSearchForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default CoinSearchForm;

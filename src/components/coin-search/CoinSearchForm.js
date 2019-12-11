import React, { useState } from 'react';
import styles from './CoinSearchForm.css';

//todo make onSubmit function

const CoinSearchForm = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <form className={styles.SearchForm} onSubmit={() => {}}>
      <input type='text' value={searchTerm} onChange={event => setSearchTerm(event.target.value)} />
      <button>🔍</button>
    </form>
  );
};

export default CoinSearchForm;

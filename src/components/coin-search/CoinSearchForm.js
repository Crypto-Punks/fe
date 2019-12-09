import React, { useState } from 'react';

//todo make onSubmit function

const CoinSearchForm = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <form onSubmit={() => {}}>
      <input type='text' value={searchTerm} onChange={event => setSearchTerm(event.target.value)} />
      <button>🔍</button>
    </form>
  );
};

export default CoinSearchForm;

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Logo from '../../images/cryptoLogoPlain.png';
import styles from './NetWorth.css';
import { getNetWorth, getPortfolioInvestedCoins } from '../../selectors/portfolioSelectors';
import { getCoinPriceById } from '../../services/currencies';
import { UPDATE_NET_WORTH } from '../../actions/portfolioActions';

const NetWorth = () => {
  const netWorth = useSelector(getNetWorth);
  const portfolioInvestedCoins = useSelector(getPortfolioInvestedCoins);
  const dispatch = useDispatch();


  useEffect(() => {
    if(portfolioInvestedCoins.length) {
      Promise.all(portfolioInvestedCoins.map(val => {
        // if(val.name === 'USD') {return val.amount;}
        return getCoinPriceById(val.name)
          .then(price => price * val.amount);
      })).then(values => {
        return values.reduce((acc, val) => acc + val); 
      }). then(netWorth => dispatch({ type: UPDATE_NET_WORTH, payload: netWorth }));
    }
  }, [portfolioInvestedCoins]);

  return (
    <div className={styles.NetWorth}>
      <img src={Logo} />
      <p>Net worth: ${netWorth}</p>
    </div>
  );
};

export default NetWorth;

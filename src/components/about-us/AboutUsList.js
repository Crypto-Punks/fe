import React from 'react';
import { connect } from 'react-redux';
import Developer from './AboutUsItem';
import DeveloperMenu from '../hamburger-menu/DeveloperMenu';
import { developerData } from '../../developerData';
import styles from './AboutUs.css';

const DeveloperList = () => {
  const developerElements = developerData.map((developer, i) => {
    return <Developer key={i} {...developer} />;
  });
  return (
    <>
      <div className={styles.AboutUs}>
        <ul>
          {developerElements}
        </ul>
      </div>
      <DeveloperMenu />
    </>
  );
};


export default connect()(DeveloperList);

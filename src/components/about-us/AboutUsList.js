import React from 'react';
import { connect } from 'react-redux';
import Developer from './AboutUsItem';
import DeveloperMenu from '../hamburger-menu/DeveloperMenu';
import { developerData } from '../../developerData';

const DeveloperList = () => {
  const developerElements = developerData.map((developer, i) => {
    return <Developer key={i} {...developer} />;
  });
  return (
    <>
      <ul>
        {developerElements}
      </ul>
      <DeveloperMenu />
    </>
  );
};


export default connect()(DeveloperList);

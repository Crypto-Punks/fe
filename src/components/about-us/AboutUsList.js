import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import Developer from './AboutUsItem';
import DeveloperMenu from '../hamburger-menu/DeveloperMenu';
import { developerData } from '../../developerData';
import { SET_OPEN_MENU_FALSE } from '../../actions/menuActions';

const DeveloperList = () => {

  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch({ type: SET_OPEN_MENU_FALSE });
    return () => dispatch({ type: SET_OPEN_MENU_FALSE });
  }, []);

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

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, FormControlLabel, Icon } from '@material-ui/core';

import { DARK_MODE } from '../../common';
import * as actions from '../../redux/actions';

const DarkMode = () => {

  const dispatch = useDispatch();
  const isDarkMode = useSelector(state => state.darkMode);

  const handleDarkMode = (e) => {
    let checked = e.target.checked;
    dispatch(actions.darkMode(checked));
    localStorage.setItem(DARK_MODE, checked);
  }

  return (
    <>
      <FormControlLabel
        control={
          <Switch
            checked={isDarkMode}
            onChange={(e) => handleDarkMode(e)}
            color="secondary"
            name="dark-mode"
          />}
        label="Dark Mode"
      />
      <DarkModeIcon dark={isDarkMode} />
    </>
  )
}

const DarkModeIcon = ({ dark }) => {
  return dark
    ? <Icon color="secondary">brightness_3</Icon>
    : <Icon color="primary">brightness_5</Icon>
};

export default DarkMode;
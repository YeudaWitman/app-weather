import React from 'react';

import { Icon } from '@material-ui/core';

const DarkModeIcon = ({dark}) => {
  return dark
  ? <Icon color="secondary">brightness_3</Icon>
  : <Icon color="primary">brightness_5</Icon>
};

export default DarkModeIcon;
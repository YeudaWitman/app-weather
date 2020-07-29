import React from 'react';
import { MuiThemeProvider } from "@material-ui/core/styles";

import themes from '../common/themes';

const Theme = ({ children, dark }) => {

  return (
    <MuiThemeProvider children={children}
      theme={dark ? themes.themeDark : themes.themeLight}>
    </MuiThemeProvider>
  );
}

export default Theme;
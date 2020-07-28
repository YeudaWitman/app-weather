import { createMuiTheme } from "@material-ui/core/styles";

export default {
  themeLight: createMuiTheme({
    palette: {
      type: 'light',
      primary: {
        light: '#47829A',
        main: '#3A6B7E',
        dark: '#2D5362',
        contrastText: '#fff',
        mainGradient: "linear-gradient(to right bottom, #430089, #82ffa1)"
      },
      secondary: {
        light: '#ffa07e',
        main: '#e76f51',
        dark: '#b04027',
        contrastText: '#fff',
      },
      text: {
        primary: '#000',
        secondary: '#999',
        disabled: '#222',
        hint: '#000'
      },
      background: {
        default: '#F1F6F9',
        paper: '#D5E5EC'
      }
    },
    shape: {
      borderRadius: 8
    },
    divider: "rgba(0, 0, 0, 0.12)",
  }),
  themeDark: createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        light: '#52717f',
        main: '#264653',
        dark: '#001f2a',
        contrastText: '#fff',
        mainGradient: "linear-gradient(to right bottom, #430089, #82ffa1)"
      },
      secondary: {
        light: '#ffa07e',
        main: '#e76f51',
        dark: '#b04027',
        contrastText: '#000',
      },
      text: {
        primary: '#fff',
        secondary: '#fff',
        disabled: '#fff',
        hint: '#fff'
      },
      background: {
        default: '#060C0E',
        paper: '#0D181C'
      }
    },
    shape: {
      borderRadius: 8
    },
    divider: "rgba(0, 0, 0, 0.12)",

  })
}
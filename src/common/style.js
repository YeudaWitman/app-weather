import { fade, makeStyles } from '@material-ui/core/styles';

const FONT_SIZE = '1.5em';

const useStyles = makeStyles((theme) => ({
  favorites: {
    paper: {
      padding: theme.spacing(3, 1, 1, 1),
      margin: theme.spacing(2, 0),
      height: '100%',
      textAlign: 'center',
      background: '#274754'
    },
    innerPaper: {
      margin: theme.spacing(2, 0),
      padding: theme.spacing(3, 0, 4, 0),
      textAlign: 'center',
      background: '#2D5362'
    },
    button: {
      margin: theme.spacing(3, 0, 0, 0),
      width: '100%',
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.primary.main, 0.1),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.5),
    },
    width: '100%',
    margin: '2ch 0 2ch 0',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(3, 1, 3, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '30ch',
      '&:focus': {
        width: '40ch',
      },
    },
    fontSize: FONT_SIZE
  },
  list: {
    padding: theme.spacing(0, 1, 3, 0),
    width: '40ch',
    fontSize: FONT_SIZE,
    backgroundColor: '#001f2a'
  }
}));

export default useStyles;
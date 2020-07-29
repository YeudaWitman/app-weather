import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
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
}));

export default useStyles;
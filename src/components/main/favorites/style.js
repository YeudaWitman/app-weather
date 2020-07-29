import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2, 0, 0, 0),
    margin: theme.spacing(2, 0),
    height: '150px',
    textAlign: 'center',
    background: '#274754'
  },
  innerPaper: {
    margin: theme.spacing(2, 0),
    padding: theme.spacing(3, 0, 4, 0),
    textAlign: 'center',
    background: '#2D5362'
  },
}));

export default useStyles;
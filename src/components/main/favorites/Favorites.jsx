import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2, 0, 0, 0),
    margin: theme.spacing(0, 0),
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

const Favorites = ({match}) => {
  const classes = useStyles();
  return (
    <Grid container justify="center" alignItems="center" spacing={1}>
      <Grid container justify="center" alignItems="center" item xs={12}>
        <Typography variant="h4" color="secondary">
        Favorites
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3} xl={2}>
        <Paper className={classes.paper} elevation={3}>
      <Typography variant="h6">tr</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3} xl={2}>
        <Typography variant="h6">tr</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3} xl={2}>
        <Typography variant="h6">tr</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3} xl={2}>
        <Typography variant="h6">tr</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3} xl={2}>
        <Typography variant="h6">tr</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3} xl={2}>
        <Typography variant="h6">tr</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3} xl={2}>
        <Typography variant="h6">tr</Typography>
      </Grid>
    </Grid>
  )
}

export default Favorites;
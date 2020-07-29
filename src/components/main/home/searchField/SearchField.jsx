import React from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../../redux/actions';
import { LinearProgress, Grid, Popper, InputBase, Icon, List } from '@material-ui/core';

import SuggestionsList from './SuggestionsList.jsx';
import useStyles from './style';
import { Redirect } from 'react-router-dom';

const AUTOCOMPLETE_API = 'https://my-json-server.typicode.com/YeudaWitman/autoCompleteMock/data';

const SearchField = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  let { pending, suggestions } = useSelector(state => state.suggestion);
  let anchorEl = useSelector(state => state.suggestionMenu.anchorEl);

  const open = Boolean(anchorEl);

  const handleSearch = (e) => {
    let query = e.target.value;
    dispatch(actions.search(query));
    dispatch(actions.openSuggestionMenu(e.currentTarget));

    if (query.length <= 1) {
      dispatch(actions.closeSuggestionMenu(null));
      return;
    }
    dispatch(actions.suggestionPending());
    axios.get(AUTOCOMPLETE_API)
    .then((response) => {
      dispatch(actions.suggestionSuccess(response.data));
    })
    .catch((error) => {
      dispatch(actions.suggestionError(error));
    })
  }

  const handleCloseList = (city) => {
    const selected = {
      key: city.Key,
      name: city.LocalizedName,
      country: city.Country.LocalizedName
    }
    dispatch(actions.setCurrentCity(selected));
    dispatch(actions.closeSuggestionMenu(null));
    dispatch(actions.search(''));
  }

  return (
    <Grid container justify="center" alignItems="center">
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <Icon>search</Icon>
        </div>
        <InputBase
          placeholder="Search city…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
          onChange={handleSearch}
        />
      </div>
      <Popper open={open} anchorEl={anchorEl}>
        <List className={classes.list} component="nav" aria-label="suggestions">
          {pending ? <LinearProgress color="secondary"/> :
          <SuggestionsList handleClose={handleCloseList} list={suggestions} />
          }
        </List>
      </Popper>
    </Grid>
  )
}

export default SearchField;
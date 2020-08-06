import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { LinearProgress, Grid, Popper, InputBase, Icon } from '@material-ui/core';

import SuggestionsList from './SuggestionsList.jsx';
import * as actions from '../../../../redux/actions';
import { searchStyles } from '../../../../common/style';
import { fetchData } from '../../../../services/fetchData';

const SearchField = () => {
  const classes = searchStyles();
  const dispatch = useDispatch();

  let { pending, suggestions, error } = useSelector(state => state.suggestion);
  let { query } = useSelector(state => state.search);
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
    fetchData.suggestions(dispatch);
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
          value={query}
        />
      </div>
      <Popper open={open} anchorEl={anchorEl}>
        {pending ? <LinearProgress color="secondary" /> :
          <SuggestionsList handleClose={handleCloseList} data={suggestions} error={error} />
        }
      </Popper>
    </Grid>
  )
}

export default SearchField;
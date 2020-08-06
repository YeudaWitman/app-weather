import React from 'react';
import { Popper, ListItem, List, LinearProgress, Typography } from '@material-ui/core';

import SuggestionsListItem from './SuggestionsListItem.jsx';
import { searchStyles } from '../../../../common/style';

const SuggestionsList = ({ handleClose, data, error }) => {
  const classes = searchStyles();

  return (
    <List className={classes.list} component="nav" aria-label="suggestions">
      {error ? <ListItem><Typography variant="inherit" color="error">Oops! Something went wrong.</Typography></ListItem> : ''}
      {(data.length < 1) ? <ListItem><Typography variant="inherit">There are no results that match your search.</Typography></ListItem> :
        data.map((city) => {
          return (<SuggestionsListItem
            key={city.Key}
            handleClose={handleClose}
            city={city}
          />)
        })
      }
    </List>);

}

export default SuggestionsList;
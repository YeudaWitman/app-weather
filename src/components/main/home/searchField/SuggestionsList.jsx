import React from 'react';
import { Popper, ListItem, List, LinearProgress, Typography } from '@material-ui/core';

import SuggestionsListItem from './SuggestionsListItem.jsx';
import { searchStyles } from '../../../../common/style';

const SuggestionsList = ({ handleClose, data, error }) => {
  const classes = searchStyles();

  console.log(data)
  return (
    <List className={classes.list} component="nav" aria-label="suggestions">
      {error ? <ListItem><Typography variant="inherit" color="error">Oops! Something went wrong.</Typography></ListItem> :
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
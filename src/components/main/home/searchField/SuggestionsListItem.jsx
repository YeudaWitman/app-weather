import React from 'react';
import { NavLink } from 'react-router-dom';
import { ListItem } from '@material-ui/core';

const SuggestionsListItem = ({ city, handleClose }) => {
  const { Country } = city;
  return (
    <ListItem button onClick={() => handleClose(city)} component={NavLink} to={`/${city.Key}`} >
      {city.LocalizedName}, {Country.LocalizedName}
    </ListItem>
  )
}

export default SuggestionsListItem;
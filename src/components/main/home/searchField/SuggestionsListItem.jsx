import React from 'react';
import { ListItem } from '@material-ui/core';
import { NavLink } from 'react-router-dom';

const SuggestionsListItem = ({city, handleClose}) => {
  const {Country} = city;
  return (
    <ListItem button onClick={() => handleClose(city)} component={NavLink} to={`/${city.Key}`} >
      {city.LocalizedName}, {Country.LocalizedName}
    </ListItem>
  )
}

export default SuggestionsListItem;
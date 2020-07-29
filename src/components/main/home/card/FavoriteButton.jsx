import React from 'react';

import { Box, Button, Icon} from '@material-ui/core';

const FavoriteButton = ({city}) => {

  const handleAddToFavorites = () => {
    console.log(city);
  }
  
  const handleRemoveFromFavorites = () => {
    console.log(city);
  }

  const opt = {
    add: {
      color: 'inherit',
      icon: 'favorite_border',
      text: 'Add to favorites',
      handle: handleAddToFavorites
    },
    remove: {
      color: 'secondary',
      icon: 'favorite',
      text: 'Remove from favorites',
      handle: handleRemoveFromFavorites
    }
  };
  
  const fav = 'remove';

  return (
    <Box display="flex" padding={2}>
        <Icon fontSize="large" color={opt[fav].color}>{opt[fav].icon}</Icon>
        <Button color="inherit" onClick={opt[fav].handle}>{opt[fav].text}</Button>
    </Box>
  );
}

export default FavoriteButton;
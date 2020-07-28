import React from 'react';

import { Box, Button, Icon} from '@material-ui/core';

const handleAddToFavorites = (city) => {
  console.log(city);
}

const handleRemoveFromFavorites = (city) => {
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

const FavoriteButton = ({city}) => {
  const fav = 'remove';

  return (
    <Box display="flex" padding={2}>
        <Icon fontSize="large" color={opt[fav].color}>{opt[fav].icon}</Icon>
        <Button color="inherit" onClick={opt[fav].handle}>{opt[fav].text}</Button>
    </Box>
  );
}

export default FavoriteButton;
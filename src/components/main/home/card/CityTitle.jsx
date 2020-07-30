import React from 'react'

import { Typography, Box } from '@material-ui/core';

const CityTitle = ({ title }) => {

  return (
    <Box >
      <Typography variant="h5" component="span">
        {title.name},{' '}
      </Typography>
      <Typography variant="subtitle1" component="span" >
        {title.country}
      </Typography>
    </Box>
  )
}

export default CityTitle;
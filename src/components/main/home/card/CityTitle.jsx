import React from 'react'

import { Typography } from '@material-ui/core';

const CityTitle = props => {

  const {title} = props;
  return (
    <>
      <Typography variant="h4" component="span">
        {title.name},{' '}
      </Typography>
      <Typography variant="subtitle1" component="span" >
        {title.country}
      </Typography>
    </>
  )
}

export default CityTitle;
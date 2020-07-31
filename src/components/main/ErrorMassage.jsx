import React from 'react';
import { Container, Typography } from '@material-ui/core';

const ErrorMassage = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Oops! Something went wrong.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Try again later or contact us.
      </Typography>
    </Container>
  )
}

export default ErrorMassage;
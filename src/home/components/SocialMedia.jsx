import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';

export const SocialMedia = () => {
  return (
    <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={3}>
             <FacebookIcon/>
            </Grid>
          </Grid>
  )
}

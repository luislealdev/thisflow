import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Grid } from '@mui/material';

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
             <InstagramIcon/>
             <YouTubeIcon/>
             <TwitterIcon/>
            </Grid>
            <h6>Follow me!</h6>
          </Grid>
  )
}

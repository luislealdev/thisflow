import { Fab } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React from 'react'

export const FloatButton = ({url}) => {
  return (
    <Fab size="medium" color="secondary" aria-label="add" component="a" href={url} target="_blank" sx={{position:'fixed', right: '7%', bottom: '3%'}}>
    <FavoriteIcon />
    </Fab>
  )
}

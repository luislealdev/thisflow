import { Fab } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React from 'react'

export const FloatButton = () => {
  return (
    <Fab size="medium" color="secondary" aria-label="add" sx={{position:'fixed', right: '7%', bottom: '3%'}}>
  <FavoriteIcon />
    </Fab>
  )
}

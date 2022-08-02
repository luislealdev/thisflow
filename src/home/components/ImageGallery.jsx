import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export const ImageGallery = () => {
  return (
    <Box sx={{ width: '96%', height: '96%', margin: '2%' }}>
      <ImageList variant="masonry" cols={4} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}

const itemData = [
  {
    img: 'src/home/assets/img/1.jpeg',
    title: 'Skrillex',
  },
  {
    img: 'src/home/assets/img/2.jpeg',
    title: 'Skrillex',
  },
  {
    img: 'src/home/assets/img/3.png',
    title: 'Skrillex',
  },
  {
    img: 'src/home/assets/img/4.png',
    title: 'Skrillex',
  },
  {
    img: 'src/home/assets/img/5.jpeg',
    title: 'Skrillex',
  },
  {
    img: 'src/home/assets/img/6.jpeg',
    title: 'Skrillex',
  },
  {
    img: 'src/home/assets/img/7.jpeg',
    title: 'Skrillex',
  },
  {
    img: 'src/home/assets/img/8.jpeg',
    title: 'Skrillex',
  },
  {
    img: 'src/home/assets/img/9.jpeg',
    title: 'Skrillex',
  },
  {
    img: 'src/home/assets/img/10.jpeg',
    title: 'Skrillex',
  },

];
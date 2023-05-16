import styled from '@emotion/styled';
import { Avatar, Grid } from '@mui/material';
import Image from 'next/image';
import React from 'react';

function CustomImageGallery({ images, onSelect }) {
  console.log(images);
  return (
    <Grid container spacing={2}>
      {images &&
        images.map((img, i) => (
          <Grid key={i} item xs={12} md={6} style={{ maxHeight: '300px' }}>
            <Avatar variant='square' style={{ width: '100%', height: '100%' }}>
              <Image
                src={img.src}
                width={200}
                height={200}
                alt={img.caption ? img.caption : img.alt ? img.alt : 'img'}
                onClick={(e) => {
                  onSelect(i);
                }}
              />
            </Avatar>
          </Grid>
        ))}
    </Grid>
  );
}

export default CustomImageGallery;

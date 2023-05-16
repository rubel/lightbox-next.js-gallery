import React, { useEffect } from 'react';
import { SlideshowLightbox, initLightboxJS } from 'lightbox.js-react';
import 'lightbox.js-react/dist/index.css';
import CustomImageGallery from './CustomImageGallery';
import { Avatar, Card } from '@mui/material';
import Image from 'next/image';
import styled from '@emotion/styled';

const ImageContainerCard = styled(Card)`
  width: 300px;
  textalign: auto;
  margin: 100px auto;
  padding: 10px;
`;
const InnerContainer = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: auto auto;
`;
const StyledImageContainer = styled.div`
  border-radius: 10px;
  width: 100%;
  height: 90px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;

function LightboxGallery({ images }) {
  useEffect(() => {
    initLightboxJS('Insert your License Key here', 'Insert plan type here');
  }, []);

  return (
    <ImageContainerCard>
      <SlideshowLightbox
        lightboxIdentifier='lightbox1'
        theme='day'
        framework='next'
        images={images}
      >
        <InnerContainer>
          {images.map((image, i) => (
            <StyledImageContainer key={i}>
              <Image
                src={image.src}
                alt={image.alt}
                height={500}
                width={500}
                data-lightboxjs='lightbox1'
                quality={80}
              />
            </StyledImageContainer>
          ))}
        </InnerContainer>
      </SlideshowLightbox>
    </ImageContainerCard>
  );
}

export default LightboxGallery;

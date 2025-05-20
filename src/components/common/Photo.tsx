import React from 'react';
import styled from 'styled-components';
import ImageBox from "./ImageBox.tsx";

// Define proper types for image props
interface GalleryImageProps {
    src: string,
    alt: string
}

const Gallery: React.FC<GalleryImageProps> = ({src, alt}) => {
    return (
        <ImageBox>
            <ImageWrap src={src} alt={alt}/>
        </ImageBox>
    );
};

const ImageWrap = styled.img`
    position: relative;
    width: 100%;
    max-width: 350px;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 18px;
`;

export default Gallery;
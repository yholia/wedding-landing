import React from 'react';
import styled from 'styled-components';

interface PhotoProps {
    src: string;
    alt: string;
}

const PhotoImg = styled.img`
    width: 100%;
    display: block;
`;

const Photo: React.FC<PhotoProps> = ({src, alt}) => (
    <PhotoImg src={src} alt={alt}/>
);

export default Photo;

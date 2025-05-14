import React from 'react';
import {motion} from 'framer-motion';
import styled from 'styled-components';

// Define proper types for image props
interface GalleryImageProps {
    src: string,
    alt: string
}

const Gallery: React.FC<GalleryImageProps> = ({src, alt}) => {
    return (
        <Wrapper
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 2}}
        >
            <ImageBox>
                <ImageWrap src={src} alt={alt}/>
            </ImageBox>
        </Wrapper>
    );
};

const Wrapper = styled(motion.div)`
    background: #faf5f2;
    position: relative;
    width: 100%;
    height: 520px;
    border-radius: 32px;
    overflow: hidden;
    margin-bottom: 1.5rem;
`;

const ImageBox = styled.div`
    position: relative;
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 18px;
`;

const ImageWrap = styled.img`
    width: 90%;
    height: 90%;

    img {
        width: 100%;
        height: 100%;
        display: block;
    }
`;

export default Gallery;
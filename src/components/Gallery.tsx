import React, {useState} from 'react';
import {motion} from 'framer-motion';
import styled from 'styled-components';
import Couple1Svg from '../assets/couple1.svg?react';
import Couple2Svg from '../assets/couple2.svg?react';
import Couple3Svg from '../assets/couple3.svg?react';

const images = [
    Couple1Svg,
    Couple2Svg,
    Couple3Svg,
];

const Wrapper = styled(motion.section)`
    background: #faf5f2;
    border-radius: 20px;
    padding: 1.5rem 0.5rem;
    margin: 1.5rem 0;
    text-align: center;
`;

const ImageBox = styled.div`
    position: relative;
    width: 100%;
    max-width: 350px;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 18px;
`;

const SvgWrap = styled.div`
    width: 100%;
    height: 340px;

    svg {
        width: 100%;
        height: 100%;
        display: block;
    }
`;

const Arrow = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.8);
    border: none;
    border-radius: 50%;
    width: 38px;
    height: 38px;
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 2;
    transition: background 0.2s;

    &:hover {
        background: #e9ddc7;
    }
`;

const ArrowLeft = styled(Arrow)`
    left: 10px;
`;
const ArrowRight = styled(Arrow)`
    right: 10px;
`;

const Gallery: React.FC = () => {
    const [idx, setIdx] = useState(0);
    const prev = () => setIdx((i) => (i === 0 ? images.length - 1 : i - 1));
    const next = () => setIdx((i) => (i === images.length - 1 ? 0 : i + 1));
    const SvgImg = images[idx];

    return (
        <Wrapper
            initial={{opacity: 0, y: 40}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.7}}
            viewport={{once: true}}
        >
            <ImageBox>
                <ArrowLeft onClick={prev} aria-label="Previous">&#8592;</ArrowLeft>
                <SvgWrap><SvgImg/></SvgWrap>
                <ArrowRight onClick={next} aria-label="Next">&#8594;</ArrowRight>
            </ImageBox>
        </Wrapper>
    );
};

export default Gallery; 
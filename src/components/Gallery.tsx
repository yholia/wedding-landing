import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {motion, AnimatePresence} from 'framer-motion';
import Couple1Svg from '../assets/gallery/1.jpg';
import Couple2Svg from '../assets/gallery/2.jpg';
import Couple3Svg from '../assets/gallery/3.jpg';
import Couple4Svg from '../assets/gallery/4.jpg';

const images = [Couple1Svg, Couple2Svg, Couple3Svg, Couple4Svg];

const GalleryCard = styled(motion.section)`
    background: #FDFAF6;
    border-radius: 24px;
    padding: 1.5rem;
    margin: 1.2rem 0;
    box-shadow: 0 4px 24px rgba(42, 34, 24, 0.07), 0 1px 4px rgba(42, 34, 24, 0.04);
    position: relative;
    overflow: hidden;
`;

const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    overflow: hidden;
    border-radius: 16px;
    background: #1a1410;
    aspect-ratio: 3 / 4;
`;

const SlideImage = styled(motion.img)`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
`;

const NavBtn = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: rgba(253, 250, 246, 0.88);
    border: none;
    color: #2A2218;
    font-size: 1.3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 3;
    transition: all 0.2s ease;
    padding: 0;
    line-height: 1;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

    &:hover {
        background: rgba(253, 250, 246, 1);
        transform: translateY(-50%) scale(1.08);
        color: #2A4435;
    }
`;

const NavLeft = styled(NavBtn)`
    left: 10px;
`;

const NavRight = styled(NavBtn)`
    right: 10px;
`;

const Dots = styled.div`
    display: flex;
    justify-content: center;
    gap: 6px;
    margin-top: 1rem;
`;

const DotBtn = styled.button<{ $active: boolean }>`
    width: ${({$active}) => $active ? '22px' : '7px'};
    height: 7px;
    border-radius: 4px;
    background: ${({$active}) => $active ? '#2A4435' : '#D6C5AE'};
    border: none;
    padding: 0;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background: ${({$active}) => $active ? '#2A4435' : '#C49852'};
    }
`;

const Gallery: React.FC = () => {
    const [idx, setIdx] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIdx(i => (i === images.length - 1 ? 0 : i + 1));
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const prev = () => setIdx(i => (i === 0 ? images.length - 1 : i - 1));
    const next = () => setIdx(i => (i === images.length - 1 ? 0 : i + 1));

    return (
        <GalleryCard
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
        >
            <ImageContainer>
                <NavLeft onClick={prev} aria-label="Попередня">‹</NavLeft>
                <AnimatePresence mode="wait">
                    <SlideImage
                        key={idx}
                        src={images[idx]}
                        alt=""
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.45}}
                    />
                </AnimatePresence>
                <NavRight onClick={next} aria-label="Наступна">›</NavRight>
            </ImageContainer>
            <Dots>
                {images.map((_, i) => (
                    <DotBtn key={i} $active={i === idx} onClick={() => setIdx(i)}/>
                ))}
            </Dots>
        </GalleryCard>
    );
};

export default Gallery;

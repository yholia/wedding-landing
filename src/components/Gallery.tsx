import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import Couple1Svg from '../assets/gallery/1.jpg';
import Couple2Svg from '../assets/gallery/2.jpg';
import Couple3Svg from '../assets/gallery/3.jpg';
import Couple4Svg from '../assets/gallery/4.jpg';
import Photo from "./common/Photo.tsx";
import ImageBox from "./common/ImageBox.tsx";
import Wrapper from "./common/Wrapper.tsx";

const images = [
    Couple1Svg,
    Couple2Svg,
    Couple3Svg,
    Couple4Svg
];

const Arrow = styled.button`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255, 255, 255, 0.8);
    opacity: 20%;
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

    useEffect(() => {
        const interval = setInterval(() => {
            setIdx(i => (i === images.length - 1 ? 0 : i + 1));
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const prev = () => setIdx(i => (i === 0 ? images.length - 1 : i - 1));
    const next = () => setIdx(i => (i === images.length - 1 ? 0 : i + 1));
    const SvgImg = images[idx];

    return (
        <Wrapper
            initial={{ opacity: 0, y: 50 }}
            whileInView={{opacity: 1, y: 0}}
            transition={{ duration: 2 }}
        >
            <ImageBox>
                <ArrowLeft onClick={prev} aria-label="Previous">&#8592;</ArrowLeft>
                <Photo src={SvgImg} alt={""}/>
                <ArrowRight onClick={next} aria-label="Next">&#8594;</ArrowRight>
            </ImageBox>
        </Wrapper>
    );
};

export default Gallery;
import React from 'react';
import styled from 'styled-components';
import HeroImg from '../assets/IMG_8702.jpg';
import Photo from "./common/Photo.tsx";
import Wrapper from "./common/Wrapper.tsx";

const Names = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 32px;
    text-align: left;
    padding-left: 32px;
    color: #323030;
    font-family: 'Montserrat', sans-serif;
    font-size: 3rem;
    font-weight: 400;
    letter-spacing: 0.01em;
    z-index: 2;
    @media (max-width: 500px) {
        font-size: 2.2rem;
        padding-left: 18px;
        bottom: 18px;
    }
`;

const Hero: React.FC = () => (
    <Wrapper
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 3}}
    >
        <Photo src={HeroImg} alt=""/>
        <Names>
            Євген<br/>& Анастасія
        </Names>
    </Wrapper>
);

export default Hero; 
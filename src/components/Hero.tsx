import React from 'react';
import styled from 'styled-components';
import HeroImg from '../assets/main.jpg';
import Photo from "./common/Photo.tsx";
import Wrapper from "./common/Wrapper.tsx";

const Names = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 32px;
    text-align: left;
    padding-left: 32px;
    color: #ffffff;
    text-shadow: #000000 5px 5px 2px;
    font-family: "Fleur De Leah", cursive;
    font-size: 3rem;
    font-weight: 400;
    font-style: normal;
    letter-spacing: 0.01em;
    z-index: 2;
    @media (max-width: 500px) {
        font-size: 3rem;
        padding-left: 10%;
        bottom: 10%;
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
            Yevhen<br/>& Anastasiia
        </Names>
    </Wrapper>
);

export default Hero; 
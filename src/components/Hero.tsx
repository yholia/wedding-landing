import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import HeroImg from '../assets/main.jpg';

const HeroCard = styled(motion.section)`
    border-radius: 24px;
    margin: 1.2rem 0;
    box-shadow: 0 8px 40px rgba(42, 34, 24, 0.20), 0 2px 8px rgba(42, 34, 24, 0.08);
    position: relative;
    overflow: hidden;
    background: #1a1410;
`;

const HeroImage = styled.img`
    width: 100%;
    display: block;
`;

const Names = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to top, rgba(12, 9, 5, 0.82) 0%, rgba(12, 9, 5, 0.25) 55%, transparent 100%);
    padding: 4rem 2rem 2.2rem;
    text-align: left;
    color: #FAF6F0;
    font-family: "Fleur De Leah", cursive;
    font-size: 3.5rem;
    font-weight: 400;
    line-height: 1.05;
    letter-spacing: 0.02em;
    z-index: 2;

    @media (max-width: 500px) {
        font-size: 3rem;
        padding: 3rem 1.5rem 1.8rem;
    }
`;

const Hero: React.FC = () => (
    <HeroCard
        initial={{opacity: 0, y: 30}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94]}}
    >
        <HeroImage src={HeroImg} alt="Yevhen & Anastasiia"/>
        <Names>
            Yevhen<br/>& Anastasiia
        </Names>
    </HeroCard>
);

export default Hero;

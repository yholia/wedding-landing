import React from 'react';
import {motion} from 'framer-motion';
import styled from 'styled-components';

const locations = [
    {
        title: 'Замок Лева',
        place: 'вул. Галицької Армії, 7-9, Львів',
        time: 'Початок о 14:00',
        map: 'https://maps.app.goo.gl/x9FLnRkR8SKjsCxa6',
    },
];

const LocationCard = styled(motion.section)`
    background: #D6C5AE;
    border-radius: 24px;
    padding: 2.2rem 1.8rem;
    margin: 1.2rem 0;
    box-shadow: 0 4px 24px rgba(42, 34, 24, 0.09);
    color: #2A2218;
`;

const LocationBlock = styled.div`
    &:not(:last-child) {
        margin-bottom: 2rem;
        padding-bottom: 2rem;
        border-bottom: 1px solid rgba(42, 34, 24, 0.12);
    }
`;

const PinIcon = styled.div`
    font-size: 1.6rem;
    margin-bottom: 0.6rem;
    opacity: 0.75;
`;

const Title = styled.h3`
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 1.7rem;
    font-weight: 400;
    margin: 0 0 0.5rem;
    color: #2A2218;
    letter-spacing: 0.02em;
`;

const Place = styled.div`
    font-family: 'DM Sans', sans-serif;
    font-size: 0.92rem;
    color: #7A6E64;
    margin-bottom: 0.3rem;
`;

const Time = styled.div`
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 1rem;
    font-style: italic;
    color: #7A6E64;
    margin-bottom: 1.2rem;
`;

const MapButton = styled.a`
    display: inline-block;
    background: #2A4435;
    color: #FAF6F0;
    border-radius: 10px;
    padding: 0.55rem 1.5rem;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.88rem;
    font-weight: 500;
    text-decoration: none;
    letter-spacing: 0.05em;
    transition: all 0.2s ease;

    &:hover {
        background: #1C2E24;
        color: #FAF6F0;
        text-decoration: none;
        transform: translateY(-1px);
    }
`;

const Locations: React.FC = () => (
    <LocationCard
        initial={{opacity: 0, y: 30}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.8}}
    >
        {locations.map((loc, idx) => (
            <LocationBlock key={idx}>
                <PinIcon>📍</PinIcon>
                <Title>{loc.title}</Title>
                <Place>{loc.place}</Place>
                <Time>{loc.time}</Time>
                <MapButton href={loc.map} target="_blank" rel="noopener noreferrer">
                    Дивитись на мапі
                </MapButton>
            </LocationBlock>
        ))}
    </LocationCard>
);

export default Locations;

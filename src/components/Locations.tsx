import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const locations = [
  {
    title: 'Замок Лева',
    place: ' вул. Галицької Армії, 7-9, Львів',
    time: 'Початок о 15:00',
    map: 'https://maps.app.goo.gl/x9FLnRkR8SKjsCxa6',
  },
];

const Wrapper = styled(motion.section)`
  background: #d8c2b0;
  border-radius: 20px;
  padding: 2rem 1.5rem;
  margin: 1.5rem 0;
  color: #2d2a2a;
`;

const LocationBlock = styled.div`
  margin-bottom: 2rem;
  &:last-child { margin-bottom: 0; }
`;

const Title = styled.h3`
  font-family: 'Playfair Display', serif;
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`;

const Place = styled.div`
  font-size: 1.05rem;
  margin-bottom: 0.3rem;
`;

const Time = styled.div`
  font-size: 1rem;
  margin-bottom: 0.7rem;
`;

const MapButton = styled.a`
  display: inline-block;
  background: #fff;
  color: #2d2a2a;
  border-radius: 8px;
  padding: 0.5rem 1.2rem;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  box-shadow: 0 1px 4px rgba(0,0,0,0.06);
  transition: background 0.2s;
  &:hover { background: #f5ede6; }
`;

const Locations: React.FC = () => (
  <Wrapper
      initial={{ opacity: 0, y: 50 }}
      whileInView={{opacity: 1, y: 0}}
      transition={{ duration: 2 }}
  >
    {locations.map((loc, idx) => (
      <LocationBlock key={idx}>
        <Title>{loc.title}</Title>
        <Place>{loc.place}</Place>
        <Time>{loc.time}</Time>
        <MapButton href={loc.map} target="_blank" rel="noopener noreferrer">
          Дивитись на мапі
        </MapButton>
      </LocationBlock>
    ))}
  </Wrapper>
);

export default Locations; 
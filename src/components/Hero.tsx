import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import  HeroImg from '../assets/hero.svg?react';

const Wrapper = styled(motion.section)`
  position: relative;
  width: 100%;
  height: 520px;
  border-radius: 32px;
  overflow: hidden;
  background: #e9ddc7;
  margin-bottom: 1.5rem;
`;

const BgSvg = styled.div`
  width: 100%;
  height: 100%;
  svg {
    width: 100%;
    height: 100%;
    display: block;
  }
`;

// const Logo = styled.div`
//   position: absolute;
//   top: 24px;
//   left: 24px;
//   font-family: 'Montserrat', sans-serif;
//   font-size: 1.3rem;
//   color: #fff;
//   opacity: 0.9;
//   z-index: 2;
// `;

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
    initial={{ opacity: 0, y: 50 }}
    whileInView={{opacity: 1, y: 0}}
    transition={{ duration: 2 }}
  >
    <BgSvg>
      <HeroImg/>
    </BgSvg>
    <Names>
      Євген<br />& Анастасія
    </Names>
  </Wrapper>
);

export default Hero; 
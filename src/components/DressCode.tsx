import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const colors = ['#8A9A8D', '#BDAE9C', '#EAD8CF', '#E9DDC7'];

const Wrapper = styled(motion.section)`
  background: #faf5f2;
  border-radius: 20px;
  padding: 2rem 1.5rem;
  margin: 1.5rem 0;
  text-align: center;
`;

const Title = styled.h2`
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  margin-bottom: 1.2rem;
  color: #222;
`;

const Message = styled.div`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  color: #222;
`;

const SwatchRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
`;

const Swatch = styled.div<{ color: string }>`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${({ color }) => color};
  border: 2px solid #e0d6c8;
`;

const DressCode: React.FC = () => (
  <Wrapper
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
  >
    <Title>DRESS-CODE</Title>
    <Message>
      Будемо вдячні, якщо ви підтримаєте<br />кольорову гаму нашого свята
    </Message>
    <SwatchRow>
      {colors.map((color, idx) => (
        <Swatch key={idx} color={color} />
      ))}
    </SwatchRow>
  </Wrapper>
);

export default DressCode; 
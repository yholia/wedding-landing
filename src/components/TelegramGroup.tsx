import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import CoupleSvg from '../assets/couple.svg?react';

const Wrapper = styled(motion.section)`
  background: #d8c2b0;
  border-radius: 20px;
  padding: 2rem 1.5rem;
  margin: 1.5rem 0;
  text-align: center;
  color: #2d2a2a;
`;

const Photo = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 1.2rem auto;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    width: 90px;
    height: 90px;
    display: block;
  }
`;

const Message = styled.div`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
`;

const Button = styled.a`
  display: inline-block;
  background: #fff;
  color: #2d2a2a;
  border-radius: 8px;
  padding: 0.6rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  box-shadow: 0 1px 4px rgba(0,0,0,0.06);
  transition: background 0.2s;
  margin-bottom: 1.2rem;
  &:hover { background: #f5ede6; }
`;

const TelegramGroup: React.FC = () => (
  <Wrapper
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
  >
    <Photo><CoupleSvg /></Photo>
    <Message>
      Для швидкого обміну інформацією, фото та відео між нашими гостями<br />ми створили групу в Telegram
    </Message>
    <Button href="https://t.me/yourgroup" target="_blank" rel="noopener noreferrer">
      <span role="img" aria-label="telegram">✈️</span> Приєднатися
    </Button>
  </Wrapper>
);

export default TelegramGroup; 
import React from 'react';
import styled from 'styled-components';
import CoupleSvg from '../assets/couple.svg?react';
import Wrapper from './common/Wrapper';


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
      background='#d8c2b0'
      initial={{ opacity: 0, y: 50 }}
      whileInView={{opacity: 1, y: 0}}
      transition={{ duration: 2 }}
  >
    <Photo><CoupleSvg /></Photo>
    <Message>
      Для швидкого обміну інформацією,<br/> фото та відео між нашими гостями<br/>ми створили групу в Telegram<br/>
    </Message>
    <Button href="https://t.me/+PqlnPmADUbMwYzM6" target="_blank" rel="noopener noreferrer">
      <span role="img" aria-label="telegram"></span> Приєднатися
    </Button>
    <Message>
      Якщо ви планували подарувати<br/> нам квіти, просимо змінити їх<br/> пожертвою до притулку для тварин - {" "}<br/>
      <a
          href="https://www.instagram.com/domivka_shelter_reserve?igsh=M2VuZGJpcTJraHg2&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
      >
        Domivka Shelter Reserve
      </a><br/>
      Ми хочемо щоб цей день<br/> приніс користь не тільки нам,<br/> а й тим хто справді потребує допомоги!<br/> 🐶🐱
    </Message>
  </Wrapper>
);

export default TelegramGroup; 
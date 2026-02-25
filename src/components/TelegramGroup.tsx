import React from 'react';
import styled from 'styled-components';
import CoupleSvg from '../assets/couple.svg?react';
import Wrapper from './common/Wrapper';

const CoupleIcon = styled.div`
    width: 76px;
    height: 76px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto 1.2rem auto;
    background: rgba(42, 68, 53, 0.12);
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 76px;
        height: 76px;
        display: block;
    }
`;

const Message = styled.div`
    font-family: 'DM Sans', sans-serif;
    font-size: 0.97rem;
    line-height: 1.75;
    color: #2A2218;
    margin-bottom: 1.5rem;
`;

const TelegramBtn = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    background: #2A4435;
    color: #FAF6F0;
    border-radius: 12px;
    padding: 0.7rem 1.8rem;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.92rem;
    font-weight: 500;
    text-decoration: none;
    letter-spacing: 0.05em;
    transition: all 0.2s ease;
    box-shadow: 0 2px 10px rgba(42, 68, 53, 0.22);

    &:hover {
        background: #1C2E24;
        color: #FAF6F0;
        text-decoration: none;
        transform: translateY(-1px);
        box-shadow: 0 5px 18px rgba(42, 68, 53, 0.3);
    }
`;

const TelegramGroup: React.FC = () => (
    <Wrapper
        background='#D6C5AE'
        initial={{opacity: 0, y: 30}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.8}}
    >
        <CoupleIcon><CoupleSvg/></CoupleIcon>
        <Message>
            Для швидкого обміну інформацією, фото та відео між нашими гостями
            ми створили групу в Telegram
        </Message>
        <TelegramBtn href="https://t.me/+PqlnPmADUbMwYzM6" target="_blank" rel="noopener noreferrer">
            ✈ Приєднатися
        </TelegramBtn>
    </Wrapper>
);

export default TelegramGroup;

import React from 'react';
import styled from 'styled-components';
import Wrapper from './common/Wrapper';

const Message = styled.div`
    font-family: 'DM Sans', sans-serif;
    font-size: 0.97rem;
    line-height: 1.75;
    color: #2A2218;
`;

const ShelterLink = styled.a`
    font-weight: 600;
    color: #2A4435;
    text-decoration: none;

    &:hover {
        color: #C49852;
        text-decoration: underline;
    }
`;

const Paws = styled.div`
    font-size: 1.8rem;
    margin-top: 0.9rem;
    letter-spacing: 0.2em;
`;

const Shelter: React.FC = () => (
    <Wrapper
        background="#F5F0E8"
        initial={{opacity: 0, y: 30}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.8}}
    >
        <Message>
            Якщо ви планували подарувати нам квіти,
            просимо замінити їх пожертвою до притулку для тварин —{' '}
            <ShelterLink
                href="https://www.instagram.com/domivka_shelter_reserve?igsh=M2VuZGJpcTJraHg2&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
            >
                Domivka Shelter Reserve
            </ShelterLink>
            <br/><br/>
            Ми хочемо, щоб цей день приніс користь не тільки нам,
            а й тим, хто справді потребує допомоги!
        </Message>
        <Paws>🐶🐱</Paws>
    </Wrapper>
);

export default Shelter;

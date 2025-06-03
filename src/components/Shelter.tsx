import React from 'react';
import styled from 'styled-components';
import Wrapper from './common/Wrapper';


const Message = styled.div`
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    color: #222;
`;

const TelegramGroup: React.FC = () => (
    <Wrapper
        initial={{opacity: 0, y: 50}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 2}}
    >
        <Message>
            Якщо ви планували подарувати<br/> нам квіти, просимо змінити їх<br/> пожертвою до притулку для тварин
            - {" "}<br/>
            <a
                href="https://www.instagram.com/domivka_shelter_reserve?igsh=M2VuZGJpcTJraHg2&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
            >
                Domivka Shelter Reserve
            </a><br/>
            Ми хочемо щоб цей день<br/> приніс користь не тільки нам,<br/> а й тим хто справді потребує
            допомоги!<br/> 🐶🐱
        </Message>
    </Wrapper>
);

export default TelegramGroup;
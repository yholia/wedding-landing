import React from 'react';
import styled from 'styled-components';
import Wrapper from './common/Wrapper';

const colorPalette = [
    {color: '#355743', label: 'Ліс'},
    {color: '#F0F0EC', label: 'Слонова кістка'},
    {color: '#bd9865', label: 'Пісок'},
    {color: '#2a4c7d', label: 'Темно-синій'},
    {color: '#a5b8d0', label: 'Небо'},
];

const Title = styled.h2`
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 1.8rem;
    font-weight: 400;
    margin-bottom: 0.5rem;
    color: #2A2218;
    letter-spacing: 0.12em;
    text-transform: uppercase;
`;

const Subtitle = styled.div`
    font-family: 'DM Sans', sans-serif;
    font-size: 0.95rem;
    margin-bottom: 1.8rem;
    color: #7A6E64;
    line-height: 1.6;
`;

const SwatchRow = styled.div`
    display: flex;
    justify-content: center;
    gap: 1.1rem;
    flex-wrap: wrap;
`;

const SwatchItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.45rem;
`;

const Swatch = styled.div<{ color: string }>`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: ${({color}) => color};
    border: 2.5px solid rgba(255, 255, 255, 0.55);
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.13);
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
        transform: scale(1.1) translateY(-2px);
        box-shadow: 0 5px 18px rgba(0, 0, 0, 0.2);
    }
`;

const SwatchLabel = styled.span`
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 0.78rem;
    color: #7A6E64;
    letter-spacing: 0.02em;
    max-width: 62px;
    text-align: center;
    line-height: 1.3;
`;

const DressCode: React.FC = () => (
    <Wrapper
        initial={{opacity: 0, y: 30}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.8}}
    >
        <Title>Dress Code</Title>
        <Subtitle>
            Будемо вдячні, якщо ви підтримаєте<br/>кольорову гаму нашого свята
        </Subtitle>
        <SwatchRow>
            {colorPalette.map((item, idx) => (
                <SwatchItem key={idx}>
                    <Swatch color={item.color}/>
                    <SwatchLabel>{item.label}</SwatchLabel>
                </SwatchItem>
            ))}
        </SwatchRow>
    </Wrapper>
);

export default DressCode;

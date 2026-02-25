import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import CoupleBwSvg from '../assets/couple-bw.svg?react';
import Wrapper from "./common/Wrapper.tsx";

const eventDate = new Date('2025-08-18T00:00:00');

const BgSvg = styled.div`
    position: absolute;
    inset: 0;
    z-index: 0;
    opacity: 0.06;

    svg {
        width: 100%;
        height: 100%;
        display: block;
    }
`;

const Content = styled.div`
    position: relative;
    z-index: 2;
    padding: 0.4rem 0;
`;

const TimerRow = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.85rem;
`;

const TimeBlock = styled.div`
    text-align: center;
    background: rgba(255, 255, 255, 0.55);
    border: 1px solid rgba(42, 34, 24, 0.1);
    border-radius: 14px;
    padding: 0.85rem 0.65rem 0.65rem;
    min-width: 62px;
`;

const TimeValue = styled.div`
    font-size: 2.4rem;
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-weight: 400;
    color: #2A4435;
    line-height: 1;
    letter-spacing: 0.02em;
`;

const TimeLabel = styled.div`
    font-size: 0.68rem;
    font-family: 'DM Sans', sans-serif;
    color: #7A6E64;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-top: 0.35rem;
`;

interface CaptionProps {
    strikethrough?: boolean;
}

const Caption = styled.div<CaptionProps>`
    margin-top: 1.3rem;
    font-size: 1.1rem;
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-style: italic;
    font-weight: 300;
    color: ${props => props.strikethrough ? 'rgba(42,34,24,0.3)' : '#2A2218'};
    text-decoration-line: ${props => props.strikethrough ? 'line-through' : 'none'};
    letter-spacing: 0.02em;
`;

function getTimeLeft() {
    const now = new Date();
    const diff = now.getTime() - eventDate.getTime();
    const days = Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
    const hours = Math.max(0, Math.floor((diff / (1000 * 60 * 60)) % 24));
    const minutes = Math.max(0, Math.floor((diff / (1000 * 60)) % 60));
    const seconds = Math.max(0, Math.floor((diff / 1000) % 60));
    return {days, hours, minutes, seconds};
}

const Countdown: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(getTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <Wrapper
            background={"#D6C5AE"}
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
        >
            <BgSvg><CoupleBwSvg/></BgSvg>
            <Content>
                <TimerRow>
                    <TimeBlock>
                        <TimeValue>{String(timeLeft.days).padStart(2, '0')}</TimeValue>
                        <TimeLabel>Днів</TimeLabel>
                    </TimeBlock>
                    <TimeBlock>
                        <TimeValue>{String(timeLeft.hours).padStart(2, '0')}</TimeValue>
                        <TimeLabel>Год</TimeLabel>
                    </TimeBlock>
                    <TimeBlock>
                        <TimeValue>{String(timeLeft.minutes).padStart(2, '0')}</TimeValue>
                        <TimeLabel>Хв</TimeLabel>
                    </TimeBlock>
                    <TimeBlock>
                        <TimeValue>{String(timeLeft.seconds).padStart(2, '0')}</TimeValue>
                        <TimeLabel>Сек</TimeLabel>
                    </TimeBlock>
                </TimerRow>
                <Caption strikethrough>...і ми будемо одружені!</Caption>
                <Caption>ми одружені!</Caption>
            </Content>
        </Wrapper>
    );
};

export default Countdown;

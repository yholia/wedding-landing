import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import CoupleBwSvg from '../assets/couple-bw.svg?react';
import Wrapper from "./common/Wrapper.tsx";

const eventDate = new Date('2025-08-18T00:00:00');

const BgSvg = styled.div`
    position: absolute;
    inset: 0;
    z-index: 0;

    svg {
        width: 100%;
        height: 100%;
        display: block;
    }
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(34, 34, 34, 0.55);
    z-index: 1;
`;

const TimerRow = styled.div`
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    position: relative;
    z-index: 2;
`;

const TimeBlock = styled.div`
    text-align: center;
`;

const TimeValue = styled.div`
    font-size: 2.2rem;
    font-family: 'Playfair Display', serif;
    font-weight: 700;
`;

const TimeLabel = styled.div`
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;
`;

const Caption = styled.div`
    margin-top: 1.5rem;
    //font-family: 'Droid Sans', cursive;
    font-size: 1.3rem;
    z-index: 2;
    position: relative;
`;

function getTimeLeft() {
    const now = new Date();
    const diff = eventDate.getTime() - now.getTime();
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
            background={"#222"}
            color={"#fff"}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{opacity: 1, y: 0}}
            transition={{ duration: 2 }}
        >
            <BgSvg>
                <CoupleBwSvg/>
            </BgSvg>
            <Overlay/>
            <TimerRow>
                <TimeBlock>
                    <TimeValue>{String(timeLeft.days).padStart(2, '0')}</TimeValue>
                    <TimeLabel>Днів</TimeLabel>
                </TimeBlock>
                <TimeBlock>
                    <TimeValue>{String(timeLeft.hours).padStart(2, '0')}</TimeValue>
                    <TimeLabel>Годин</TimeLabel>
                </TimeBlock>
                <TimeBlock>
                    <TimeValue>{String(timeLeft.minutes).padStart(2, '0')}</TimeValue>
                    <TimeLabel>Хвилин</TimeLabel>
                </TimeBlock>
                <TimeBlock>
                    <TimeValue>{String(timeLeft.seconds).padStart(2, '0')}</TimeValue>
                    <TimeLabel>Секунд</TimeLabel>
                </TimeBlock>
            </TimerRow>
            <Caption>...і ми будемо одружені!</Caption>
        </Wrapper>
    );
};

export default Countdown; 
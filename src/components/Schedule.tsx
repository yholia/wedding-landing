import React from 'react';
import {motion} from 'framer-motion';
import styled from 'styled-components';

const schedule = [
    {time: '14:00', event: 'Збір на локації'},
    {time: '14:30', event: 'Церемонія'},
    {time: '15:00', event: 'Майстер Клас'},
    {time: '16:30', event: 'Перше застілля'},
    {time: '17:30', event: 'Фуршет, перерва'},
    {time: '18:00', event: 'Перша музична перерва'},
    {time: '19:00', event: 'Друге застілля'},
    {time: '20:00', event: 'Друга музична перерва'},
    {time: '21:00', event: 'Розрізання весільного торта'},
    {time: '21:10', event: 'Третя музична перерва'},
];

const ScheduleCard = styled(motion.section)`
    background: #FDFAF6;
    border-radius: 24px;
    padding: 2.2rem 1.8rem;
    margin: 1.2rem 0;
    box-shadow: 0 4px 24px rgba(42, 34, 24, 0.07), 0 1px 4px rgba(42, 34, 24, 0.04);
    text-align: center;
`;

const Title = styled.h2`
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 1.8rem;
    font-weight: 400;
    margin-bottom: 2rem;
    color: #2A2218;
    letter-spacing: 0.04em;
`;

const TimelineList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        left: 62px;
        top: 14px;
        bottom: 14px;
        width: 1px;
        background: linear-gradient(to bottom, transparent 0%, #D6C5AE 12%, #D6C5AE 88%, transparent 100%);
    }
`;

const Item = styled.li`
    display: flex;
    align-items: center;
    margin-bottom: 1.25rem;
    position: relative;

    &:last-child {
        margin-bottom: 0;
    }
`;

const TimeLabel = styled.span`
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 1.05rem;
    font-weight: 500;
    color: #2A4435;
    min-width: 50px;
    text-align: right;
    flex-shrink: 0;
    letter-spacing: 0.01em;
`;

const DotArea = styled.span`
    width: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin: 0 0.85rem;
    position: relative;
    z-index: 1;
`;

const Dot = styled.span`
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #C49852;
    display: block;
    box-shadow: 0 0 0 3px rgba(196, 152, 82, 0.18);
`;

const EventText = styled.span`
    font-family: 'DM Sans', sans-serif;
    font-size: 0.97rem;
    color: #2A2218;
    flex: 1;
    text-align: left;
`;

const Schedule: React.FC = () => (
    <ScheduleCard
        initial={{opacity: 0, y: 30}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.8}}
    >
        <Title>Таймінг дня</Title>
        <TimelineList>
            {schedule.map((item, idx) => (
                <Item key={idx}>
                    <TimeLabel>{item.time}</TimeLabel>
                    <DotArea><Dot/></DotArea>
                    <EventText>{item.event}</EventText>
                </Item>
            ))}
        </TimelineList>
    </ScheduleCard>
);

export default Schedule;

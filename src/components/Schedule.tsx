import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const schedule = [
  { time: '13:00', event: 'Церемонія вінчання' },
  { time: '15:00', event: 'Святковий банкет' },
  { time: '17:30', event: 'Перерва / Фотосесія' },
  { time: '19:00', event: 'Друга частина' },
  { time: '20:30', event: 'Happy End' },
];

const ScheduleWrapper = styled(motion.section)`
  background: #faf5f2;
  border-radius: 20px;
  padding: 2rem 1.5rem;
  margin: 1.5rem 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.03);
  text-align: center;
`;

const Title = styled.h2`
  font-family: 'Cormorant Garamond', serif;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #222;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1rem;
  margin-bottom: 1.2rem;
  color: #222;
  letter-spacing: 0.01em;
  @media (max-width: 500px) {
    font-size: 1rem;
  }
`;

const Time = styled.span`
  font-weight: 600;
  min-width: 60px;
`;

const Event = styled.span`
  flex: 1;
  text-align: left;
  margin-left: 1.2rem;
`;

const Schedule: React.FC = () => (
  <ScheduleWrapper
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
  >
    <Title>Таймінг дня</Title>
    <List>
      {schedule.map((item, idx) => (
        <Item key={idx}>
          <Time>{item.time}</Time>
          <Event>{item.event}</Event>
        </Item>
      ))}
    </List>
  </ScheduleWrapper>
);

export default Schedule; 
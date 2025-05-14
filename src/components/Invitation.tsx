import React from 'react';
import {motion} from 'framer-motion';
import styled from 'styled-components';
import FlowersSvg from '../assets/flowers-top.svg?react';

const Wrapper = styled(motion.section)`
    background: #faf6f3;
    border-radius: 32px;
    padding: 2.2rem 1.2rem 2.5rem 1.2rem;
    margin-bottom: 1.5rem;
    text-align: center;
    position: relative;
    overflow: hidden;
`;

const Flowers = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    opacity: 0.18;
    pointer-events: none;

    svg {
        width: 100%;
        height: auto;
        display: block;
    }
`;

// const Heading = styled.div`
//     font-family: 'Montserrat', sans-serif;
//     font-size: 1.2rem;
//     margin-bottom: 0.5rem;
//     color: #2d2a2a;
// `;
//
// const Names = styled.div`
//     font-family: 'Dancing Script', cursive;
//     font-size: 2.1rem;
//     margin-bottom: 1.1rem;
//     color: #2d2a2a;
// `;

const Text = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-size: 1.05rem;
    margin-bottom: 1.2rem;
    color: #2d2a2a;
`;

const CalendarBlock = styled.div`
    margin: 1.2rem 0 1.5rem 0;
`;

const Month = styled.div`
    font-family: 'Montserrat', sans-serif;
    color: #d8c2b0;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
`;

const Calendar = styled.table`
    width: 100%;
    border-collapse: collapse;
    font-size: 1rem;
    color: #2d2a2a;
    margin: 0 auto;

    th, td {
        padding: 0.2rem 0.5rem;
        text-align: center;
        font-weight: 400;
    }
`;

const Heart = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    background-color: #d5918f;
    color: #1b6c3e;
    font-weight: 500;
`;

const BottomText = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-size: 1.05rem;
    margin-top: 1.5rem;
    color: #2d2a2a;
`;

const Invitation: React.FC = () => (
    <Wrapper
        initial={{ opacity: 0, y: 50 }}
        whileInView={{opacity: 1, y: 0}}
        transition={{ duration: 2 }}
    >
        <Flowers><FlowersSvg/></Flowers>
        <Text>
            Щиро запрошуємо вас на свято,<br/>присвячене створенню нашої сім'ї,<br/>яке відбудеться:
        </Text>
        <CalendarBlock>
            <Month>Серпень 2025</Month>
            <Calendar>
                <thead>
                <tr>
                    <th>ПН</th>
                    <th>ВТ</th>
                    <th>СР</th>
                    <th>ЧТ</th>
                    <th>ПТ</th>
                    <th>СБ</th>
                    <th>НД</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                    <td>10</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td>12</td>
                    <td>13</td>
                    <td>14</td>
                    <td>15</td>
                    <td>16</td>
                    <td>17</td>
                </tr>
                <tr>
                    <td><Heart>18</Heart></td>
                    <td>19</td>
                    <td>20</td>
                    <td>21</td>
                    <td>22</td>
                    <td>23</td>
                    <td>24</td>
                </tr>
                <tr>
                    <td>25</td>
                    <td>26</td>
                    <td>27</td>
                    <td>28</td>
                    <td>29</td>
                    <td>30</td>
                    <td>31</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                </tbody>
            </Calendar>
        </CalendarBlock>
        <BottomText>
            І ми не уявляємо<br/>цей радісний день без вас —<br/>близьких і дорогих нам людей.
        </BottomText>
    </Wrapper>
);

export default Invitation;
import React from 'react';
import styled from 'styled-components';
import FlowersSvg from '../assets/flowers-top.svg?react';
import Wrapper from "./common/Wrapper.tsx";

const Flowers = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    opacity: 0.07;
    pointer-events: none;

    svg {
        width: 100%;
        height: auto;
        display: block;
    }
`;

const Text = styled.div`
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 1.1rem;
    font-weight: 300;
    font-style: italic;
    margin-bottom: 1.2rem;
    color: #2A2218;
    line-height: 1.75;
    letter-spacing: 0.01em;
`;

const Divider = styled.div`
    width: 48px;
    height: 1px;
    background: linear-gradient(to right, transparent, #C49852, transparent);
    margin: 1rem auto;
`;

const CalendarBlock = styled.div`
    margin: 1.2rem 0 1.4rem 0;
`;

const Month = styled.div`
    font-family: 'DM Sans', sans-serif;
    color: #7A6E64;
    font-size: 0.8rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    margin-bottom: 0.9rem;
`;

const Calendar = styled.table`
    width: 100%;
    border-collapse: collapse;
    font-size: 0.93rem;
    color: #2A2218;
    margin: 0 auto;
    font-family: 'DM Sans', sans-serif;

    th {
        padding: 0.2rem 0.3rem;
        text-align: center;
        font-weight: 500;
        color: #7A6E64;
        font-size: 0.78rem;
        letter-spacing: 0.06em;
    }

    td {
        padding: 0.28rem 0.3rem;
        text-align: center;
        font-weight: 400;
    }
`;

const Heart = styled.span`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: #2A4435;
    color: #FAF6F0;
    font-weight: 500;
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 1rem;
`;

const BottomText = styled.div`
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 1.1rem;
    font-weight: 300;
    font-style: italic;
    margin-top: 1.4rem;
    color: #2A2218;
    line-height: 1.75;
`;

const Invitation: React.FC = () => (
    <Wrapper
        initial={{opacity: 0, y: 30}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.8}}
    >
        <Flowers><FlowersSvg/></Flowers>
        <Text>
            Щиро запрошуємо вас на свято,<br/>присвячене створенню нашої сім'ї,<br/>яке відбудеться:
        </Text>
        <Divider/>
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
                </tbody>
            </Calendar>
        </CalendarBlock>
        <Divider/>
        <BottomText>
            І ми не уявляємо<br/>цей радісний день без вас —<br/>близьких і дорогих нам людей.
        </BottomText>
    </Wrapper>
);

export default Invitation;

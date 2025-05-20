import styled from "styled-components";
import {motion} from "framer-motion";

interface WrapperProps {
    background?: string;
    color?: string;
    padding?: string;
    margin?: string;
}

const Wrapper = styled(motion.section)<WrapperProps>`
    background: ${({background}) => background || "#faf5f2"};
    color: ${({color}) => color || "#fff"};
    border-radius: 20px;
    padding: 2rem 1.5rem;
    margin: 1.5rem 0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
    text-align: center;
    position: relative;
`;

export default Wrapper;
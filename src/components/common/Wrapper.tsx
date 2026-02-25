import styled from "styled-components";
import {motion} from "framer-motion";

interface WrapperProps {
    background?: string;
    color?: string;
    padding?: string;
    margin?: string;
}

const Wrapper = styled(motion.section)<WrapperProps>`
    background: ${({background}) => background || "#FDFAF6"};
    color: ${({color}) => color || "#2A2218"};
    border-radius: 24px;
    padding: ${({padding}) => padding || "2.2rem 1.8rem"};
    margin: ${({margin}) => margin || "1.2rem 0"};
    box-shadow: 0 4px 24px rgba(42, 34, 24, 0.07), 0 1px 4px rgba(42, 34, 24, 0.04);
    text-align: center;
    position: relative;
    overflow: hidden;
`;

export default Wrapper;

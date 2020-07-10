import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    body {
        transition: all 0.25s ease-in-out 0s;
        overflow-x: hidden;
        background-color: ${props => props.backgroundColor}
    }
`;
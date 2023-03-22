import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    }

    body, input, button {
        font-family: 'Roboto', serif;
        font-size: 16px;
        outline: none;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover {
        filter: brightness(0.9);
    }
`;
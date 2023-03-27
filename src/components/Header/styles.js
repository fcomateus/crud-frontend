import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: 200px;

    position: relative;
    background-color: ${({ theme }) => theme.COLORS.GRAY};

    > button {
        background: none;
        border: none;
        
        position: absolute;
        top: 80px;
        left: 256px;

    }

    > button svg {
        font-size: 40px;
    }

    > button:hover svg {
        opacity: 0.5;
    }
`;
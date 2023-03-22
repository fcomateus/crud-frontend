import styled from "styled-components";

export const Container = styled.button`
    padding: 8px 8px;

    min-width: 100px;

    border: 2px solid black;
    border-radius: 5px;

    background-color: ${({ theme }) => theme.COLORS.BLUE};

    font-size: 20px;
`;
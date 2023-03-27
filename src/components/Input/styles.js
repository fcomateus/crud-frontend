import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;

    height: 40px;
    width: 300px;

    border: 2px solid black;
    border-radius: 20px;

    > input {
        border: none;
        padding: 0 8px;
        background: none;
        width: 100%;
    }

    &:has(input:disabled)  {
        background-color: ${({ theme }) => theme.COLORS.GRAY};
    }
`
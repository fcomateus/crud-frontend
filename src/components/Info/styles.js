import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
   
    height: 200px;
    background-color: ${({ theme }) => theme.COLORS.GRAY};

    > section:nth-child(1) {
        padding: 20px;

        display: flex;
        flex-direction: column;
        gap: 36px;

    }

    > section:nth-child(2) {
        position: relative;

        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 18px;

    }

    > section svg {
        font-size: 30px;
    }

    > section svg:hover {
        opacity: 0.7;
    }

    > section button {
        position: absolute;
        top: 8px;
        right: 8px;

        height: 30px;
        border: none;
        background: none;
    }

    
`;
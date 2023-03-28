import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
   
    height: 200px;
    background-color: ${({ theme }) => theme.COLORS.GRAY};

    > section {
        height: 200px;
    }

    > section:nth-child(1) {
        padding: 20px;

        display: flex;
        flex-direction: column;
        gap: 36px;


    }

    > section:nth-child(2) {
        position: relative;

        padding: 20px 20px 0;
        display: flex;
        flex-direction: column;
        gap: 18px;


    }

    > section button {
        background: none;
        border: none;
    }

    > section button {
        position: absolute;
        bottom: 8px;
        right: 8px;
    }

    > section button:nth-child(1) {
        top: 0px;
    }

    > section svg:hover {
        opacity: 0.7;
    }

    > section button svg {
        font-size: 30px;
    }



`;
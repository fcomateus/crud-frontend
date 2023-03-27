import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    margin: 20px auto;
    width: 700px;

    > h1 {
        font-weight: normal;
        margin: 0 auto 30px;
    }
    
`;

export const Form = styled.form`
    width: 100%;

    display: grid;

    grid-template-areas: 
    "personal address"
    "submit submit";

    .personal {
        grid-area: personal;
    }

    .address {
        grid-area: address;
    }

    .submit {
        grid-area: submit;
        width: 300px;
        margin: 75px auto 0;
    }
`;

export const Section = styled.section`
    /* border: 1px solid green; */
    display: flex;
    flex-direction: column;
    gap: 20px;

    > h3 {
        font-weight: normal;
    }
`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

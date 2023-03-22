import styled from "styled-components";

export const Container = styled.div`
    margin: 70px auto 0;
    width: 630px;

    
    > h1 {
        font-weight: 400;
    }
`;

export const Search = styled.div`
    margin: 40px 0;

    display: flex;
    justify-content: space-between;
    
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;

    > div:nth-child( even ) {
        background-color: ${({ theme }) => theme.COLORS.BLUE};
    }
`;
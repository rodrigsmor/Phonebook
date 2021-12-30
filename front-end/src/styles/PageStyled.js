import styled from 'styled-components';

export const PageComponent = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    max-height: 100vh;
    grid-template-columns: 14rem 1fr;
    grid-template-rows: 1fr 1fr 2fr;
    grid-template-areas: 
        'navbar header'
        'navbar main'
        'navbar main'
    ;
    background: ${({ theme }) => theme.palette.background.main };
    
    @media screen and (min-width: 769px) and (max-width: 1150px) {
        grid-template-columns: 6rem 1fr;
    }

    @media screen and (max-width: 768px) {
        gap: 20px;
        width: 100vw;
        display: flex;
        position: relative;
        height: fit-content;
        flex-direction: column;
    }
`;

export const Main = styled.main`
    display: grid;
    padding: 0 2em;
    grid-area: main;
    background: transparent;
    height: calc(100vh - 5rem);

    @media screen and (max-width: 768px) {
        gap: 20px;
        display: flex;
        height: fit-content;
        flex-direction: column;
        padding: 0 2em 4.5rem 2em;
    }

    @media screen and (max-width: 348px) {
        padding: 0 6% 4.5rem 6%;
    }
`;

export const Header = styled.header`
    height: 5rem;
    display: flex;
    padding: 0 2em;
    grid-area: header;
    align-items: center;
    background: transparent;
    justify-content: space-between;

    .join_elements {
        display: flex;
        gap: 1rem;
        height: 100%;
        align-items: center;
        width: fit-content;

        span.divider {
            width: 1px;
            height: 2rem;
            display: block;
            margin: 0 10px;
            background: ${({ theme }) => theme.palette.primary.dark };
        }
    }
`;
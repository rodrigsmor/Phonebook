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
`;

export const Main = styled.main`
    grid-area: main;
    padding: 0 2em;
    background: transparent;
    height: calc(100vh - 5rem);
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
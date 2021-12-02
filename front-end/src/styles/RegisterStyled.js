import styled from 'styled-components';

export const PageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    place-items: center;
`;

export const MainComponent = styled.main`
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-rows: repeat(1, 100vh);
    grid-template-columns: repeat(2, 1fr);

    .illustration {
        grid-row: 1/2;
        grid-column: 1/2;
        background: ${({ theme }) => theme.palette.primary.main };
    }
`;
import styled from 'styled-components';

export const PageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    position: relative;
    flex-direction: column;
    background: ${({ theme }) => theme.palette.background.contrast };
`;
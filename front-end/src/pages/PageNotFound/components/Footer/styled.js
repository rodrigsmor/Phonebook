import styled from 'styled-components';

export const FooterContainer = styled.footer`
    bottom: 0;
    width: 100%;
    display: flex;
    height: 5.4rem;
    padding: 0 5rem;
    position: fixed;
    align-items: center;
    justify-content: space-between;
    background: ${({ theme }) => theme.palette.primary.main };

    > * {
        color: ${({ theme }) => theme.palette.background.contrast };
    }
`;

export const SocialMedias = styled.address`
    gap: 2.5rem;
    height: 100%;
    display: flex;
    font-size: 18pt;
    width: fit-content;
    align-items: center;
    
    > * {
        cursor: pointer;
        fill: ${({ theme }) => theme.palette.background.contrast };
    }
`;
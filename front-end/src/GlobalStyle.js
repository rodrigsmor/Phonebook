import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: ${({ theme }) => theme.palette.primary.dark };
        font-family: ${({ theme }) => theme.typography.font };
    }

    html, body {
        width: 100%;
        height: 100vh;
        max-width: 100%;
        overflow: hidden;
        max-height: 100vh;
        background: ${({ theme }) => theme.palette.background.main };
    }

    .notShow {
        display: none;
    }
`;
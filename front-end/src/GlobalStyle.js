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
        max-width: 100%;
        overflow-x: hidden;
        background: ${({ theme }) => theme.palette.background.main };
    }

    .notShow {
        display: none;
    }
`;
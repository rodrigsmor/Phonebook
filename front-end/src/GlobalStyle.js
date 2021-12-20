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

    .errors {
        font-size: 13px;
        list-style: none;
        font-weight: 600;
        margin: 0 0 0 10px;
        color: ${({ theme }) => theme.palette.status.error }
    }

    @media screen and (max-width: 768px) {
        html, body {
            width: 100vw;
            max-width: 100vw;
            overflow-y: auto;
            height: fit-content;
            max-height: fit-content;
        }

        ::-webkit-scrollbar {
            width: 15px;
        }

        ::-webkit-scrollbar-thumb {
            border-radius: 8px;
            border: 5px solid
                    ${({ theme }) => theme.palette.background.main };
            background: ${({ theme }) => theme.title === 'light' 
                                ? theme.palette.opacity.dark[40]
                                : theme.palette.opacity.dark[10]     
                        }
            ;
        }
    }
`;
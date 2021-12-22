import styled from 'styled-components';

export const BoxContainer = styled.section`
    gap: 5px;
    display: grid;
    grid-row: 2/3;
    grid-column: 1/4;
    overflow: hidden;

    h3 {
        width: 100%;
        display: flex;
        height: 1.17em;
        text-align: left;
        grid-column: 1/6;
        align-items: center;
    }

    @media screen and (max-width: 768px) {
        grid-gap: 20px;

        h3 {
            font-size: 17pt;
        }
    }
`;

export const ContactsWrapper = styled.div`
    width: 100%;
    display: grid;
    height: 3.8rem;
    overflow: hidden;
    grid-column: 1/6;
    grid-template-columns: repeat(8, 1fr);

    .contactWrapper {
        display: grid;
        place-items: center;
        background: transparent;
    }

    @media screen and (min-width: 769px) and (max-width: 1190px) {
        grid-template-columns: repeat(7, 1fr);

        .contactWrapper {
            &:nth-of-type(8) {
                display: none;
            }
        }
    }

    @media screen and (min-width: 769px) and (max-width: 1050px) {
        grid-template-columns: repeat(6, 1fr);

        .contactWrapper {
            &:nth-of-type(7) {
                display: none;
            }
        }
    }
    
    @media screen and (min-width: 769px) and (max-width: 1050px) {
        grid-template-columns: repeat(5, 1fr);
    
        .contactWrapper {
            &:nth-of-type(6) {
                display: none;
            }
        }
    }

    @media screen and (max-width: 769px) {
        grid-gap: 20px 10px;
        display: grid;
        overflow-x: auto;
        padding: 0 0 15px;
        overflow-y: hidden;
        position: relative;
        height: fit-content;
        grid-auto-flow: row;
        grid-template-columns: repeat(2, 70%);
        grid-template-rows: repeat(4, fit-content);

        .contactWrapper {
            :nth-of-type(-n + 4) {
                grid-column: 1/2;
            }

            :nth-of-type(n + 5) {
                grid-column: 2/3;
            }

            :nth-of-type(1),
            :nth-of-type(5) {
                grid-row: 1/2;
            }

            :nth-of-type(2),
            :nth-of-type(6) {
                grid-row: 2/3;
            }

            :nth-of-type(3),
            :nth-of-type(7) {
                grid-row: 3/4;
            }

            :nth-of-type(4),
            :nth-of-type(8) {
                grid-row: 4/5;
            }

            display: block;
        }

        ::-webkit-scrollbar-thumb {
            border-radius: 8px;
            border: 5px solid
                        ${({ theme }) => theme.palette.background.contrast };
            background: ${({ theme }) => theme.title === 'light' 
                                ? theme.palette.opacity.dark[40]
                                : theme.palette.opacity.dark[10]     
                        }
            ;
        }
    }
`;

export const ContactsMin = styled.figure`
    cursor: pointer;
    overflow: hidden;
    transition: .5s ease;

    figure {
        display: grid;
        width: 3.2rem;
        height: 3.2rem;
        overflow: hidden;
        transition:.5 ease;
        border-radius: 50%;
        place-items: center;

        img {
            width: 100%;
            height: auto;
            border: none;
            transition: .3s ease;

            :hover {
                transform: scale(1.8);
            }
        }
    }

    @media screen and (min-width: 769px) {
        width: 3.2rem;
        display: flex;
        margin: auto 0;
        height: 3.2rem;
        border-radius: 50%;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        border: 2px solid
            ${({ theme }) => theme.palette.opacity.dark[40] };

        h4, h5 {
            display: none;
        }
    }

    @media screen and (max-width: 768px) {
        display: grid;
        grid-gap: 0px 10px;
        grid-template-rows: repeat(fit-content);
        grid-template-columns: 3.5rem 1fr;

        figure {
            grid-row: 1/3;
            grid-column: 1/2;
            border-radius: 20px;
            border: 1px solid
                    ${({ theme }) => theme.palette.opacity.dark[40]}
            ;
        }

        h4, h5 {
            display: flex;
        }

        h4 {
            font-weight: 700;
            font-weight: 18px;
            align-items: flex-end;
            line-height: 20px;
        }

        h5 {
            font-size: 12px;
            font-weight: 700;
            align-items: flex-start;
            line-height: 14px;
            color: ${({ theme }) => theme.palette.secondary.dark };
        }
    }
`;
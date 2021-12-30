import styled from 'styled-components';

export const YourContactsContainer = styled.section`
    gap: 10px;
    display: flex;
    grid-row: 3/5;
    grid-column: 1/4;
    align-items: center;
    flex-direction: column;
    border-radius: 15px 15px 0 0 !important;

    h3 {
        width: 100%;
        display: flex;
        text-align: left;
        grid-column: 1/6;
        align-items: center;
    }

    @media screen and (max-width: 768px) {
        gap: 20px;
        max-width: 100%;
        overflow: hidden;
        margin: 0 0 10px 0;
        box-shadow: none !important;
        padding: 20px 0px !important;
        background: transparent !important;

        h3 {
            grid-row: 1/2;
            font-size: 17pt;
            grid-column: 1/3;
        }
    }
`;

export const ContactsWrapper = styled.div`
    gap: 20px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    @media screen and (max-width: 768px) {
        grid-row: 2/3;
        grid-column: 1/3;
    }
`;

export const ContactContainer = styled.div`
    display: flex;
    padding: 0 20px;
    align-items: center;
    border-radius: 15px;
    transition: .5s ease;
    justify-content: space-between;

    picture {
        width: 3em;
        height: 3em;
        display: grid;
        overflow: hidden;
        position: relative;
        border-radius: 50%;
        place-items: center;
        border: 2px solid
                ${({ theme }) => theme.palette.opacity.dark[40] };

        img {
            width: 100%;
            height: auto;
            margin: auto;
            position: absolute;
        }
    }

    h4, h5 {
        color: ${({ theme }) => theme.palette.secondary.dark };
    }

    h4 {
        width: 35%;
        text-align: center;
        white-space: nowrap;
    }

    h5 {
        width: 20%;
        text-align: center;
    }

    button {
        outline: none;
        cursor: pointer;
        font-size: 15px;
        font-weight: 500;
        padding: 5px 20px;
        border-radius: 10px;
        transition: .5s linear;
        border: 0px solid transparent;
        background: ${({ theme }) => theme.palette.primary.main };
        color: ${({ theme }) => theme.palette.background.contrast };
        
        :hover {
            background: ${({ theme }) => theme.palette.primary.dark };
        }
    }

    @media screen and (min-width: 769px) {
        width: 100%;
        height: 4.5em;
        box-shadow: 0px 0px 10px -1px
                    ${({ theme }) => theme.palette.opacity.dark[30] };
        background: ${({ theme }) => theme.palette.background.medium };

        :hover {
            transform: scale(1.03);
        }

        h4 {
            span {
                display: none;
            }
        }
    }

    @media screen and (min-width: 769px) and (max-width: 1040px) {
        h5 {
            display: none;
        }

        h4 {
            width: 45%;
            overflow: hidden;
            max-width: 45%;
        }
    }

    @media screen and (min-width: 769px) and (max-width: 860px) {
        button {
            font-size: 13px;
            padding: 5px 10px;
        }
    }

    @media screen and (max-width: 768px) {
        display: flex;
        grid-gap: 10px;
        padding: 20px 20px;
        max-width: initial;
        align-items: center;
        flex-direction: column;
        background: ${({ theme }) => theme.palette.primary.main };

        picture {
            width: 5rem;
            height: 5rem;
        }

        button {
            width: 100%;
            padding: 5px 0px;
            color: ${({ theme }) => theme.palette.primary.main };
            background: ${({ theme }) => theme.title === 'light' 
                        ? theme.palette.background.main
                        : theme.palette.background.contrast 
            };
        }

        h4 {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            max-width: 100%;
            overflow: hidden;
            white-space: nowrap;
            align-items: center;
            justify-content: center;
            font-size: clamp(15px, 5vw, 25pt);
            color: ${({ theme }) => theme.palette.background.main };

            span {
                font-size: 9pt;
                flex-basis: 100%;
                line-height: 10px;
                color: ${({ theme }) => theme.title === 'light'
                        ? theme.palette.secondary.dark
                        : theme.palette.secondary.light
                };
            }
        }

        h5 {
            width: fit-content;
            color: ${({ theme }) => theme.palette.background.contrast };
        }

        &:nth-of-type(2) {
            background: ${({ theme }) => theme.palette.secondary.main };
            
            button {
                color: ${({ theme }) => theme.palette.secondary.main };
            }
        }
    }
`;
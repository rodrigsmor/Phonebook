import styled from 'styled-components';

export const GreetingsBox = styled.section`
    display: grid;
    grid-gap: 10px;
    grid-column: 1/3;
    grid-template-columns: 2fr 1fr;
    
    article {
        display: flex;
        overflow: hidden;
        grid-column: 1/2;
        max-width: initial;
        max-height: inherit;
        flex-direction: column;
        justify-content: center;
        
        h3 {
            width: 100%;
            height: 25pt;
            max-width: 100%;
            font-size: 18pt;
            max-height: 25pt;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
        
        p {
            font-size: 11pt;
            font-weight: 500;
            color: ${({ theme }) => theme.palette.primary.light }
        }
    }

    div {
        display: grid;
        grid-column: 2/3;
        max-height: inherit;
        place-items: center;
        position: relative;

        img {
            width: 100%;
            height: auto;
        }
    }

    button {
        outline: none;
        cursor: pointer;
        font-size: 15px;
        margin: 20px 0 0;
        padding: 5px 20px;
        width: max-content;
        border-radius: 10px;
        transition: .5s linear;
        border: 0px solid transparent;
        background: ${({ theme }) => theme.palette.primary.main };
        color: ${({ theme }) => theme.palette.background.contrast };
        
        :hover {
            background: ${({ theme }) => theme.palette.primary.dark };
        }
    }

    @media screen and (min-width: 866px) {
        div {
            img {
                position: absolute;
                transform: scale(1.5);
            }
        }
    }

    @media screen and (min-width: 769px) and (max-width: 865px) {
        grid-template-columns: 1fr;

        div {
            display: none;
        }
    }

    @media screen and (min-width: 461px) and (max-width: 768px) {
        padding: 3em 2.3em !important;
        grid-template-columns: 1fr 10rem;

        article {
            h3 {
                font-size: 5vw;
                font-weight: 800;
                height: fit-content;
                max-height: fit-content;
            }
        }

        div {
            width: 10rem;
            height: 10rem;

            img {
                width: inherit;
                height: inherit;
                position:a absolute;
                transform:scale(1.1);
            }
        }
    }

    @media screen and (max-width: 460px) {
        grid-template-columns: 100%;
        padding: 30px 20px 15px !important;
        grid-template-rows: repeat(2, fit-content);

        article {
            grid-row: 2/3;
            grid-column: 1/2;
            align-items: center;

            h3 {
                height: max-content;
                white-space: wrap;
                text-align: center;
                max-height: max-content;
                font-size: clamp(20px, 8vw, 25pt);
            }

            p {
                font-size: clamp(12px, 5vw, 11pt);
                text-align: center;
            }
        }

        div {
            grid-row: 1/2;
            grid-column: 1/2;
        }

        button {
            width: 100%;
        }
    }
`;
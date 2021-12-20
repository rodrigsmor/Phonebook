import styled from 'styled-components';

export const ToRememberContainer = styled.section`
    display: grid;
    overflow: hidden;
    grid-column: 3/5;
    grid-template-columns: 1fr;
    grid-template-rows: 1.17em 125px;
    
    h3 {
        display: flex;
        grid-row: 1/2;
        grid-column: 1/2;
        align-items: center;
    }
    
    .cardWrapper{
        display: grid;
        grid-row: 2/3;
        grid-column: 1/2;
        grid-template-columns: repeat(5, 1fr);
    }

    @media screen and (min-width: 769px) and (max-width: 1190px) {
        .cardWrapper {
            grid-template-columns: repeat(4, 1fr);

            div:nth-of-type(5) {
                display: none;
            }
        }
    }
    
    @media screen and (min-width: 769px) and (max-width: 905px) {
        .cardWrapper {
            grid-template-columns: repeat(3, 1fr);
        
            div:nth-of-type(4) {
                display: none;
            }
        }
    }

    @media screen and (max-width: 768px) {
        overflow-x: hidden;
        grid-gap: 20px 10px;
        box-shadow: none !important;
        padding: 20px 0px !important;
        background: transparent !important;
        grid-template-rows: 1.17em max-content;

        h3 {
            font-size: 17pt;
        }

        .cardWrapper {
            grid-gap: 15px;
            overflow-x: auto;
            overflow-y: hidden;
            grid-template-columns: repeat(5, 40%);

            div {
                &:nth-of-type(odd) {
                    background: ${({ theme }) => theme.palette.primary.main };
                }

                &:nth-of-type(even) {
                    background: ${({ theme }) => theme.palette.secondary.main };
                }
            }
        }
    }
`;

export const ContactMin = styled.div`
    gap: 10px;
    display: grid;
    padding: 10px;
    place-items: center;
    border-radius: 15px;
    grid-template-rows: 2fr 1fr;

    figure {
        width: 5em;
        height: 5em;
        grid-row: 1/3;
        display: flex;
        cursor: pointer;
        position: relative;
        align-items: center;
        border-radius: 50%;
        justify-content: center;
        overflow: hidden;    
        border: 2px solid
                ${({ theme }) => theme.palette.opacity.dark[40]};

        img {
            width: 100%;
            height: auto;
            margin: auto;
            position: absolute;
            object-fit: center;
            transition: .5s ease;
            
            :hover {
                transform: scale(1.8);
            }
        }
    }

    span {
        grid-row: 3/4;
        font-size: 10px;
        font-weight: 700;
        line-height: 5px;        
        color: ${({ theme }) => theme.palette.secondary.dark };
    }

    @media screen and (max-width: 768px) {
        gap: 15px;
        padding: 20px 10px;
        margin: 0 0 10px 0;

        span {
            font-size: 10pt;
            font-weight: 600;
            color:  ${({ theme }) => theme.palette.background.main };
        }

        figure {
            width: 5.2em;
            height: 5.2em;
            border: 5px solid
                ${({ theme }) => theme.title === 'light'
                    ? theme.palette.opacity.dark[40]
                    : theme.palette.opacity.main[30]
                }
            ;
        }
    }
`;
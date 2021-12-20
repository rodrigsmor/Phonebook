import styled from 'styled-components';

export const YourContactsContainer = styled.section`
    gap: 20px;
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
`;

export const ContactContainer = styled.div`
    width: 100%;
    height: 4.5em;
    display: flex;
    align-items: center;
    border-radius: 15px;
    transition: .5s ease;
    padding: 0 20px;
    justify-content: space-between;
    box-shadow: 0px 0px 10px -1px
                ${({ theme }) => theme.palette.opacity.dark[30] };
    background: ${({ theme }) => theme.palette.background.medium };

    :hover {
        width: 102%;
    }

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
`;
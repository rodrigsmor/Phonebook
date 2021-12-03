import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainComponent = styled.main`
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 50%);
`;

export const Redirect = styled(Link)`
    display: flex;
    margin: 45px 0 0;
    font-weight: 600;
    width: fit-content;
    align-items: center;
    text-decoration: none;
    transition: .5s ease-in-out;

    > * {
        opacity: 1;
        transition: .8s ease;
    }
    
    :hover {
        opacity: 0.8;

        > * {
            opacity: 0;
            margin-left: 30px;
        }
    }
`;

export const ImageContainer = styled.figure`
    display: grid;
    grid-column: 1/2;
    padding: 15% 0 15% 15%;

    img {
        width: 100%;
        height: 100%;
    }
`;

export const WarningText = styled.article`
    gap: 15px;
    padding: 2rem;
    display: flex;
    grid-column: 2/3;
    flex-direction: column;
    justify-content: center;

    h2 {
        z-index: 1;
        display: flex;
        margin: 0 0 0px;
        font-size: 12rem;
        width: fit-content;
        position: relative;
        line-height: 10rem;
        height: fit-content;
        align-items: center;
        justify-content: center;
        color: ${({ theme }) => theme.palette.primary.main };
        
        ::after {
            z-index: -1;
            content: '404';
            font-size: 10rem;
            position: absolute;
            color: ${({ theme }) => theme.palette.primary.dark };
        }
    }
    
    h3 {
        font-size: 30px;
        word-spacing: 10px;
        letter-spacing: -2px;
        color: ${({ theme }) => theme.palette.primary.dark };
    }
    
    h5 {
        opacity: 0.7;
        font-size: 18px;
        line-height: 19px;
        color: ${({ theme }) => theme.palette.primary.main };
    }
`;
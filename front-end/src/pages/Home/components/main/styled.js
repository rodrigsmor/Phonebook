import styled from 'styled-components';
import { Main } from '../../../../styles/PageStyled';

export const MainContainer = styled(Main)`
    display: grid;
    grid-gap: 20px;
    grid-template-rows: 30% repeat(3, 1fr);
    grid-template-columns: repeat(3, 1fr) 2fr;

    section, 
    aside {
        padding: 15px 20px;
        border-radius: 15px;
        box-shadow: 0px 0px 10px -1px
                    ${({ theme }) => theme.palette.opacity.dark[20] };
        background: ${({ theme }) => theme.palette.background.contrast };
    }  
`;

export const GreetingsBox = styled.section`
    display: flex;
    grid-column: 1/3;
    align-items: center;
    justify-content: space-between;

    img {
        width: auto;
        height: 100%;
    }  

    article {
        h3 {
            font-size: 18pt;
        }   
        p {
            font-size: 13px;
        }
    }

    button {
        outline: none;
        cursor: pointer;
        font-size: 15px;
        margin: 20px 0 0;
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
`;
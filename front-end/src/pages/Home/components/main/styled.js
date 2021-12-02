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
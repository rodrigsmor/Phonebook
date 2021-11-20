import styled from 'styled-components';

export const SideContainer = styled.aside`
    display: flex;
    grid-column: 1/2;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;

    p, img {
        width: 90%;
    }

    p {
        font-weight: 600;
        line-height: 20px;
        text-align: center;
        color: ${({ theme }) => theme.palette.primary.main };
    }
    
    .logo {
        h2 {
            color: ${({ theme }) => theme.palette.primary.main };
        }
        
        svg > g {
            fill: ${({ theme }) => theme.palette.primary.main };
        }
    }
`;
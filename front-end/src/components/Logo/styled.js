import styled from "styled-components";

export const LogoContainer = styled.hgroup`
    display: flex;
    cursor: pointer;
    width: fit-content;
    height: fit-content;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    svg {
        width: 3rem;
        height: 3rem;
        
        g {
            fill: ${({ theme }) => theme.palette.primary.light };
        }
    }
`;

export const LogoTypo = styled.h2`
    font-size: 15pt;
    font-weight: 700;
    color: ${({ theme }) => theme.palette.primary.light };

    span {
        color: ${({ theme }) => theme.palette.secondary.main };
    }
`;
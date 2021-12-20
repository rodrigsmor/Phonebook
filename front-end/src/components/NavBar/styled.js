import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBarContainer = styled.nav`
    display: flex;
    grid-area: navbar;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    background: ${({ theme }) => theme.palette.background.contrast };

    @media screen and (min-width: 769px) and (max-width: 1150px) {
        .logo {
            h2 {
                display: none;
            }
        }
    }

    @media screen and (max-width: 768px) {
        left: 0;
        bottom: 0;
        z-index: 9;
        width: calc(100% - 15px);
        height: 5rem;
        position: fixed;
        flex-direction: row;
        border-radius: 20px 20px 0 0;
        box-shadow: 0px -1px 16px 2px 
            ${({ theme }) => theme === 'light'
                ? theme.palette.opacity.dark[40]
                : theme.palette.opacity.dark[10] 
            }
        ; 

        .logo,
        footer {
            display: none;
        }
    }
`;

export const Options = styled.ul`
    gap: 10px;
    display: flex;
    list-style: none;
    flex-direction: column;

    li {
        display: grid;
        padding: 5px;
        line-height: 35px;
        border-radius: 10px;
        text-decoration: none;
        transition: .3s linear;
        background: transparent;
        
        :nth-child(3) {
            padding: 0 0;
        }
        
        &:hover {
            background: ${({ theme }) => theme.palette.opacity.dark[10] };
        }
        
        &.selected {
            width: 100%;
            border-radius: 0;
            position: relative;
            
            :hover {
                background: transparent;
            }
        }
    }
    
    @media screen and (min-width: 769px) and (max-width: 1150px) {
        gap: 15px;
        align-items: center;

        li {
            padding: 10px;
            line-height: 40px;
            width: fit-content;

            &.selected {
                width: fit-content;
            }
        }
    }

    @media screen and (max-width: 768px) {
        width: 100%;
        flex-direction: row;
        justify-content: space-evenly;
        
        li {
            padding: 10px;

            &.selected {
                width: fit-content;
            }
        }
    }
`;

export const LinkTo = styled(Link)`
    gap: 8px;
    display: flex;
    align-items: center;
    text-decoration: none;
    
    svg, g {
        font-size: 18px;
        fill: ${({ theme }) => theme.palette.primary.light };
    }
    
    p {
        font-size: 15px;
        color: ${({ theme }) => theme.palette.primary.light };
    }

    .selected & {
        font-weight: 600;

        svg, g {
            font-size: 20px;
        }

        ::after {
            right: 0;
            width: 5px;
            height: 5px;
            content: '';
            display: block;
            position: absolute;
            border-radius: 50%;
            background: ${({ theme }) => theme.palette.primary.light };
        }
    }

    @media screen and (max-width: 1150px) {
        svg, g {
            font-size: 18pt;
            color: red;
        }

        p {
            display: none;
        }

        .selected & {
            svg, g {
                font-size: 18pt;
            }
        }
    }
    
    @media screen and (max-width: 768px) {
        svg, g {
            font-size: 20pt;
        }

        .selected & {
            svg, g {
                font-size: 20pt;
            }
        }

        ::after {
            left: 0;
            bottom: 0;
            margin: 0 auto;
        }
    }
`;

export const ContactButton = styled.button`
    gap: 10px;
    display: flex;
    outline: none;
    cursor: pointer;
    padding: 10px 25px;
    align-items: center;
    border-radius: 15px;
    transition: .5s linear;
    border: transparent 0px solid;
    background: ${({ theme }) => theme.palette.primary.light };
    
    p {
        color: ${({ theme }) => theme.palette.background.contrast };
    }

    svg, g {
        font-size: 20px;
        fill: ${({ theme }) => theme.palette.background.contrast };
    }
    
    :hover {
        background: ${({ theme }) => theme.title === 'light'
                        ? theme.palette.primary.dark 
                        : theme.palette.primary.main };
    }

    @media screen and (max-width: 1150px) {
        p {
            display: none;
        }
    }

    @media screen and (max-width: 768px) {
        svg, g {
            font-size: 22pt;
        }
    }
`;

export const UserAccount = styled.footer`
    width: 90%;
    height: 4rem;
    padding: 1rem;
    display: grid;
    cursor: pointer;
    border-radius: 15px;
    grid-template-areas: 'picture userName button'
                         'picture subtitle button';
    background: ${({ theme }) => theme.palette.opacity.main[30]};
    
    h5 {
        font-size: 12px;
        grid-area: userName;
        color: ${({ theme }) => theme.palette.primary.main };
    }
    
    h6 {
        font-size: 10px;
        grid-area: subtitle;
        color: ${({ theme }) => theme.palette.secondary.main };
    }

    @media screen and (min-width: 769px) and (max-width: 1150px) {
        padding: 0;
        width: 3.5rem;
        height: 3.5rem;
        position: relative;
        place-items: center;
        background: transparent;
        grid-template-rows: 1fr;
        grid-template-columns: 1fr;

        h6, h5 {
            display: none;
        }
    }
`;

export const ProfileWrapper = styled.figure`
    width: 2rem;
    height: 2rem;
    display: grid;
    grid-area: picture;
    border-radius: 50%;
    place-items: center;
    margin: 0 5px 0 0;
    overflow: hidden;
    border: 1px solid
            ${({ theme }) => theme.palette.opacity.dark[40] };

    img {
        width: 100%;
        height: 100%;
    }

    @media screen and (min-width: 769px) and (max-width: 1150px) {
        width: inherit;
        height: inherit;
        margin: 0px;
        border: 3px solid
                    ${({ theme }) => theme.palette.opacity.dark[40] };
    }
`;

export const MoreInformations = styled.button`
    width: 20px;
    display: grid;
    outline: none;
    cursor: pointer;
    grid-area: button;
    margin: 0 0 0 5px;
    border-radius: 5px;
    place-items: center;
    transition: .5s linear;
    background: transparent;
    border: transparent solid 0px;
    
    svg {
        font-size: 20px;
        fill: ${({ theme }) => theme.palette.primary.main };
    }

    :hover {
        background: ${({ theme }) => theme.palette.opacity.main[80] };
    }

    @media screen and (min-width: 769px) and (max-width: 1150px) {
        margin: 0px;
        grid-row: 1/2;
        width: inherit;
        height: inherit;
        grid-column: 1/2;
        position: absolute;
        border-radius: 50%;
        background: transparent;

        :hover {
            opacity: 0.2;
            background: ${({ theme }) => theme.palette.primary.dark };
        }

        svg {
            display: none;
        }
    }
`;
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavBarContainer = styled.nav`
    display: flex;
    grid-area: navbar;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    background: ${({ theme }) => theme.palette.background.contrast };
`;

export const Options = styled.ul`
    gap: 10px;
    display: flex;
    list-style: none;
    flex-direction: column;

    li {
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
`;

export const LinkTo = styled(Link)`
    gap: 8px;
    display: flex;
    font-size: 15px;
    align-items: center;
    text-decoration: none;
    color: ${({ theme }) => theme.palette.primary.light };
    
    svg, g {
        font-size: 18px;
        fill: ${({ theme }) => theme.palette.primary.light };
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
`;

export const ContactButton = styled.button`
    display: flex;
    gap: 10px;
    outline: none;
    cursor: pointer;
    padding: 10px 25px;
    align-items: center;
    border-radius: 15px;
    transition: .5s linear;
    border: transparent 0px solid;
    color: ${({ theme }) => theme.palette.background.contrast };
    background: ${({ theme }) => theme.palette.primary.light };
    
    svg, g {
        font-size: 20px;
        fill: ${({ theme }) => theme.palette.background.contrast };
    }
    
    :hover {
        background: ${({ theme }) => theme.title === 'light'
                        ? theme.palette.primary.dark 
                        : theme.palette.primary.main };
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
`;
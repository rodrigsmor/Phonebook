import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
    top: 0;
    width: 100%;
    height: 6rem;
    display: flex;
    padding: 0 5rem;
    position: fixed;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(to bottom,
        ${({ theme }) => theme.palette.opacity.dark[50] },
        ${({ theme }) => theme.palette.opacity.dark[10] },
        transparent
    );

    .logo {
        svg > g {
            fill: ${({ theme }) => theme.palette.primary.main };
        }

        h2 {
            display: none;
        }
    }
`;

export const ButtonSpan = styled.div`
    gap: 3rem;
    height: 100%;
    display: flex;
    align-items: center;

	button {
        display: grid;
        cursor: pointer;
		font-size: 20pt;
		line-height: 0px;
		width: fit-content;
		height: fit-content;
		place-items: center;
        background: transparent;
        border: 0px solid transparent;
        
        svg {
            > * {
                color: ${({ theme }) => theme.palette.primary.main };
            }
        }
	}
`;

export const LoginButton = styled(Link)`
    display: flex;
    cursor: pointer;
    font-size: 16pt;
    font-weight: 600;
    position: relative;
    align-items: center;
    text-decoration: none;
    flex-direction: column;
    justify-content: center;
    color: ${({ theme }) => theme.palette.primary.main };
    
    ::after {
        width: 0%;
        height: 3px;
        content: '';
        bottom: -5px;
        display: block;
        position: absolute;
        transition: .5s ease;
        background: ${({ theme }) => theme.palette.primary.main };
    }

    :hover {
        ::after {
            width: 120%;
        }
    }
`;
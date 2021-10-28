import styled from 'styled-components';

export const HeaderContainer = styled.header`
    height: 5rem;
    display: flex;
    padding: 0 2em;
    grid-area: header;
    align-items: center;
    background: transparent;
    justify-content: space-between;

    .components {
        display: flex;
        gap: 1rem;
        height: 100%;
        align-items: center;
        width: fit-content;

        span.divider {
            width: 1px;
            height: 2rem;
            display: block;
            margin: 0 10px;
            background: ${({ theme }) => theme.palette.primary.dark };
        }
    }
`;

export const PageTitle = styled.h1`
    font-weight: 800;
    color: ${({ theme }) => theme.palette.primary.dark };
`;

export const NotificationButton = styled.button`
    border: none;
    display: grid;
    width: 2.5rem;
    height: 2.5rem;
    line-height: 0;
    cursor: pointer;
    font-size: 15pt;
    place-items: center;
    position: relative;
    border-radius: 15px;
    color: ${({ theme }) => theme.palette.primary.dark };
    background: ${({ theme }) => theme.palette.primary.light };
    
    ::before {
        content: '';
        display: block;
        width: 0;
        height: 0;
        background: ${({ theme }) => theme.palette.opacity.dark[10] };
        position: absolute;
        border-radius: 50%;
        transition: .3s ease-in-out;
    }

    :hover {
        ::before {
            width: 100%;
            height: 100%;
            border-radius: 15px;
        }
    }
`;
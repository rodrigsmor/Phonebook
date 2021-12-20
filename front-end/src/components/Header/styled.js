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
        gap: 1rem;
        height: 100%;
        display: flex;
        align-items: center;
        width: fit-content;
        
        .divider {
            width: 1px;
            height: 2rem;
            display: block;
            margin: 0 10px;
            background: ${({ theme }) => theme.palette.primary.dark };
        }
    }
    
    @media screen and (max-width: 768px) {
        gap: 20px;
        flex-wrap: wrap;
        padding: 3.5rem 2em;
        height: fit-content;
        border-radius: 0 0 0 60px;
        background: ${({ theme }) => theme.palette.primary.main };

        .components {
            gap: 1.5rem;
            height: 3rem;
            
            .searchBar,
            .divider {
                display: none;
            }
        }
    }
`;

export const PageTitle = styled.h1`
    font-weight: 800;
    color: ${({ theme }) => theme.palette.primary.dark };
    
    @media screen and (min-width: 769px) and (max-width: 830px) {
        font-size: 21pt;
    }

    @media screen and (max-width: 768px) {
        color: ${({ theme }) => theme.palette.background.contrast };
    }
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
    background: ${({ theme }) => theme.palette.background.contrast };
    
    @media screen and (max-width: 768px) {
        background: transparent;
        font-size: 20pt;
        
        > * {
            > * {
                color: ${({ theme }) => theme.palette.background.contrast };
            }
        }
    }
`;

export const ResponsiveHeader = styled.div`
    display: flex;
    flex-basis: 100%;
    height: fit-content;
    align-items: center;
    background: transparent;
    justify-content: space-between;

    figure {
        width: 4rem;
        height: 4rem;
        overflow: hidden;
        border-radius: 50%;
        border: 2px solid
            ${({ theme }) => theme.palette.opacity.main[30] }
        ;

        img {
            width: inherit;
            height: inherit;
        }
    }
    
    button {
        display: grid;
        cursor: pointer;
		font-size: 25pt;
		line-height: 0px;
		width: fit-content;
		height: fit-content;
		place-items: center;
        background: transparent;
        border: 0px solid transparent;
        
        svg {
            > * {
                color: ${({ theme }) => theme.palette.background.main };
            }
        }
	}

    @media screen and (min-width: 769px) {
        display: none;
    }
`;
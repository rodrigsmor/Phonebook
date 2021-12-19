import styled from 'styled-components';

export const GreetingsBox = styled.section`
    display: grid;
    grid-gap: 10px;
    grid-column: 1/3;
    grid-template-columns: 2fr 1fr;
    
    article {
        display: flex;
        overflow: hidden;
        grid-column: 1/2;
        max-width: initial;
        max-height: inherit;
        flex-direction: column;
        justify-content: center;
        
        h3 {
            width: 100%;
            height: 25pt;
            max-width: 100%;
            font-size: 18pt;
            max-height: 25pt;
            overflow: hidden;
            white-space: nowrap;
        }
        
        p {
            font-size: 11pt;
            font-weight: 500;
            color: ${({ theme }) => theme.palette.primary.light }
        }
    }

    div {
        display: grid;
        grid-column: 2/3;
        max-height: inherit;
        place-items: center;
        position: relative;

        img {
            width: 100%;
            height: auto;
            position: absolute;
            transform: scale(1.5);
        }
    }

    button {
        outline: none;
        cursor: pointer;
        font-size: 15px;
        margin: 20px 0 0;
        padding: 5px 20px;
        width: max-content;
        border-radius: 10px;
        transition: .5s linear;
        border: 0px solid transparent;
        background: ${({ theme }) => theme.palette.primary.main };
        color: ${({ theme }) => theme.palette.background.contrast };
        
        :hover {
            background: ${({ theme }) => theme.palette.primary.dark };
        }
    }

    @media screen and (min-width: 768px) and (max-width: 865px) {
        grid-template-columns: 1fr;

        div {
            display: none;
        }
    }
`;
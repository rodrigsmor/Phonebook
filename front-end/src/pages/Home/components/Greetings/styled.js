import styled from 'styled-components';

export const GreetingsBox = styled.section`
    grid-gap: 10px;
    display: grid;
    grid-column: 1/3;
    grid-template-columns: 2fr 1fr;
    
    article {
        display: flex;
        grid-column: 1/2;
        max-height: inherit;
        flex-direction: column;
        justify-content: center;
        
        h3 {
            font-size: 18pt;
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
`;
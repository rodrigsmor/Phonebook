import styled from 'styled-components';

export const GreetingsBox = styled.section`
    display: flex;
    grid-column: 1/3;
    align-items: center;
    justify-content: space-between;

    img {
        width: auto;
        height: 100%;
    }

    article {
        h3 {
            font-size: 18pt;
        }

        p {
            font-size: 10pt;
            color: ${({ theme }) => theme.palette.primary.light }
        }
    }

    button {
        outline: none;
        cursor: pointer;
        font-size: 15px;
        margin: 20px 0 0;
        padding: 5px 20px;
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
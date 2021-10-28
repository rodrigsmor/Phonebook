import styled from 'styled-components';

export const ToRememberContainer = styled.section`
    display: grid;
    grid-column: 3/5;
    grid-column-gap: 20px;
    grid-template-rows: 1.17em 3fr;
    grid-template-columns: repeat(5, 1fr);

    h3 {
        display: flex;
        grid-column: 1/6;
        align-items: center;
    }
`;

export const ContactMin = styled.div`
    gap: 10px;
    display: grid;
    padding: 10px;
    place-items: center;
    border-radius: 15px;
    grid-template-rows: 2fr 1fr;

    div {
        width: 5em;
        height: 5em;
        grid-row: 1/3;
        display: flex;
        cursor: pointer;
        position: relative;
        align-items: center;
        border-radius: 50%;
        justify-content: center;
        overflow: hidden;

        img {
            width: 100%;
            height: auto;
            margin: auto;
            margin: auto;
            position: absolute;
            object-fit: center;
            transition: .5s ease;
            
            :hover {
                width: 120%;
                height: aut;
            }
        }
    }

    span {
        grid-row: 3/4;
        font-size: 10px;
        font-weight: 700;
        line-height: 5px;
    }
`;
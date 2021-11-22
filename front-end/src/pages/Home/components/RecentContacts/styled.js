import styled from 'styled-components';

export const BoxContainer = styled.section`
    gap: 5px;
    display: grid;
    grid-row: 2/3;
    grid-column: 1/4;
    overflow: hidden;

    h3 {
        display: flex;
        text-align: left;
        grid-column: 1/6;
        height: 1.17em;
        align-items: center;
        width: 100%;
    }
`;

export const ContactsWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-gap: 26px;
    overflow: hidden;
    grid-column: 1/6;
    height: 3.8rem;
    padding: 0 5px;
    grid-template-columns: repeat(8, 3.2rem);
`;

export const ContactsMin = styled.figure`
    margin: auto 0;
    width: 3.2rem;
    display: flex;
    height: 3.2rem;
    cursor: pointer;
    overflow: hidden;
    border-radius: 50%;
    align-items: center;
    transition: .5s ease;
    flex-direction: column;
    justify-content: center;
    border: 2px solid
            ${({ theme }) => theme.palette.opacity.dark[40] };

    img {
        width: 100%;
        height: auto;
        border: none;
        transition: .3s ease;

        :hover {
            transform: scale(1.8);
        }
    }
`;
import styled from 'styled-components';

export const BoxContainer = styled.section`
    display: grid;
    gap: 5px;
    grid-row: 2/3;
    grid-column: 1/4;
    overflow: hidden;
`;

export const ContactsWrapper = styled.div`
    gap: 20px;
    display: flex;
    align-items: center;
`;

export const ContactsMin = styled.figure`
    width: 3rem;
    height: 3rem;
    display: flex;
    cursor: pointer;
    border-radius: 50%;
    align-items: center;
    transition: .5s ease;
    flex-direction: column;
    box-shadow: 0px 0px 10px 5px rgba(24, 3, 64, .2);

    img {
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 50%;
    }

    :hover {
        width: 3.5rem;
        height: 3.5rem;
    }
`;
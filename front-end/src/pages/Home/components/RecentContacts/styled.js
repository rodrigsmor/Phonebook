import styled from 'styled-components';

export const BoxContainer = styled.section`
    display: grid;
    gap: 5px;
    grid-row: 2/3;
    grid-column: 1/4;
    overflow: hidden;
`;

export const ContactsWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ContactsMin = styled.figure`
    width: 3rem;
    height: 3rem;
    display: flex;
    border-radius: 50%;
    align-items: center;
    flex-direction: column;
    border: 2px 
            solid 
            ${({ theme }) => theme.palette.secondary.light };

    img {
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 50%;
    }
`;
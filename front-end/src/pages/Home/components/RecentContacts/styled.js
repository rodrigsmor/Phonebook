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
    height: 3.8rem;
    overflow: hidden;
    grid-column: 1/6;
    grid-template-columns: repeat(8, 1fr);

    .contactWrapper {
        display: grid;
        place-items: center;
        background: transparent;
    }

    @media screen and (max-width: 1190px) {
        grid-template-columns: repeat(7, 1fr);

        .contactWrapper {
            &:nth-of-type(8) {
                display: none;
            }
        }
    }

    @media screen and (max-width: 1050px) {
        grid-template-columns: repeat(6, 1fr);

        .contactWrapper {
            &:nth-of-type(7) {
                display: none;
            }
        }
    }
    
    @media screen and (min-width: 768px) and (max-width: 1050px) {
        grid-template-columns: repeat(5, 1fr);
    
        .contactWrapper {
            &:nth-of-type(6) {
                display: none;
            }
        }
    }
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
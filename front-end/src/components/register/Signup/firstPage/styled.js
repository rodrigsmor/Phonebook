import styled from 'styled-components';
import { ButtonWrapper } from '../SignupForm/styled';
import { ButtonSubmit } from '../../RegisterForm/styled';

export const FirstPageContainer = styled.div`
    display: grid;
    grid-row: 1/2;
    grid-gap: 1.2rem;
    grid-column: 1/2;
    background: transparent;
    animation: animation .5s ease;
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: repeat(2, 1fr);
    
    @keyframes animation {
        from {
            opacity: 0;
            transform: translateX(100%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
`;

export const FormFields = styled.div`
    display: grid;
    grid-gap: 5px;

    &:nth-of-type(1) {
        grid-row: 1/2;
        grid-column: 1/2;
    }

    &:nth-of-type(2) {
        grid-row: 1/2;
        grid-column: 2/3;
    }

    &:nth-of-type(3) {
        grid-row: 2/3;
        grid-column: 1/3;
    }

    &:nth-of-type(4) {
        grid-row: 3/4;
        grid-column: 1/2;
    }

    &:nth-of-type(5) {
        grid-row: 3/4;
        grid-column: 2/3;
    }

    &:nth-of-type(6) {
        display: flex;
        grid-row: 4/5;
        grid-column: 1/3;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        background: transparent;

        p {
            height: 15px;
        }
    }
`;

export const SignUpSubmit = styled(ButtonSubmit)`

`;

export const ButtonWrapperField = styled(ButtonWrapper)`
    grid-row: 5/6;
    grid-column: 1/3;
`;
import styled from 'styled-components';
import { FormWrapper } from '../RegisterForm/styled';

export const SignupFormContainer = styled(FormWrapper)`
    background: transparent;
    grid-template-rows: repeat(5, 1fr);
    grid-template-columns: repeat(2, 1fr);
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

export const ButtonWrapper = styled.div`
    gap: 2rem;
    display: flex;
    grid-row: 5/6;
    grid-column: 1/3;
    align-items: center;
    justify-content: space-between;

    button,
    a {
        display: flex;
        cursor: pointer;
        font-size: 10pt;
        font-weight: 600;
        padding: 8px 50px;
        width: max-content;
        height: max-content;
        border-radius: 15px;
        align-items: center;
        text-decoration: none;
        background: transparent;
        transition: .5s ease-in-out;
        border: 0px solid transparent;
        
        :hover {
            background: ${({ theme }) => theme.palette.opacity.dark[10] };
        }
        
        &.next {
            padding: 8px 40px;
            background: ${({ theme }) => theme.palette.primary.main };
            color: ${({ theme }) => theme.palette.background.contrast };
            
            :hover {
                background: ${({ theme }) => theme.palette.primary.dark };
            }
        }
    }
`;
import styled from 'styled-components';
import { FormWrapper, ButtonSubmit } from '../RegisterForm/styled';

export const LoginFormContainer = styled(FormWrapper)`
    grid-gap: 1.5rem;
    height: fit-content;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: fit-content repeat(4, 1fr);
`;

export const FormFields = styled.div`
    display: grid;
    grid-gap: 5px;

    p {
        height: 13px;
    }

    :nth-of-type(2) {
        grid-row: 2/3;
        grid-column: 1/3;
    }

    :nth-of-type(3) {
        grid-row: 3/4;
        grid-column: 1/3;
    }

    :nth-of-type(4) {
        grid-row: 4/5;
        grid-column: 1/3;
        display: flex;
        align-items: center;
        justify-content: center;

        a {
            display: flex;
            font-weight: 600;
            width: fit-content;
            position: relative;
            text-align: center;
            align-items: center;
            text-decoration: none;
            flex-direction: column;
            justify-content: center;
            color: ${({ theme }) => theme.palette.primary.main };
            
            ::after {
                width: 0;
                height: 2px;
                content: '';
                bottom: -2px;
                display: block;
                position: absolute;
                transition: .2s ease;
                background: ${({ theme }) => theme.palette.primary.main };
            }

            :hover {
                ::after {
                    width: 70%;
                }
            }
        }
    }
`;

export const ButtonsBox = styled.div`
    display: flex;
    grid-row: 1/2;
    grid-column: 1/3;
    align-items: center;
    background: transparent;
    justify-content: space-between;
`;

export const CheckBoxCard = styled.div`
    gap: 5px;
    display: flex;
    cursor: pointer;
    padding: 5px 20px;
    position: relative;
    border-radius: 8px;
    width: fit-content;
    height: fit-content;
    align-items: center;
    justify-content: center;
    background: ${({ theme }) => theme.palette.background.medium };
    border: 1px solid 
            ${({ theme }) => theme.palette.opacity.dark[20] };
            
    &.checked {
        border: 2px solid 
                ${({ theme }) => theme.palette.primary.main };
    }
    
    label {
        font-size: 12pt;
        font-weight: 600;
        color: ${({ theme }) => theme.palette.primary.main };
    }
    
    input {
        opacity: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
        appearance: none;
        position: absolute;
        -webkit-appearance: none;
        background: transparent;
    }
    
    svg {
        font-size: 15pt;
        
        > * {
            color: ${({ theme }) => theme.palette.primary.main };
        }
    }
`;

export const LoginButton = styled(ButtonSubmit)`
    grid-row: 5/6;
    grid-column: 1/3;
`;
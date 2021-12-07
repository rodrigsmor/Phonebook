import styled from 'styled-components';
import { ButtonWrapper } from '../SignupForm/styled';
import { ButtonSubmit } from '../../RegisterForm/styled';

export const SecondPageContainer = styled.div`
    height: 100%;
    display: grid;
    grid-row: 1/2;
    grid-column: 1/2;
    grid-template-columns: 1fr;
    animation: animation .5s ease;
    grid-template-rows: max-content auto max-content;
    
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

export const ElementDivisors = styled.div`
    display: flex;
    grid-column: 1/2;
    position: relative;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    
    &:nth-of-type(1) {
        grid-row: 1/2;

        h5, h4 {
            font-size: 11pt;
            height: fit-content;
            color: ${({ theme }) => theme.palette.primary.dark }
        }
        
        h4 {
            font-size: 20pt;
            color: ${({ theme }) => theme.palette.primary.main }
        }
    }

    &:nth-of-type(2) {
        grid-row: 2/3;
        gap: 10px;

        p {
            height: 13px;
        }

        .upload {
            width: 13rem;
            height: 13rem;
            border-radius: 50%;
        }
    }
`;

export const ElementDivisorsButtons = styled(ButtonWrapper)`
    grid-row: 3/4;
    padding: 1rem 0;
    flex-direction: row;
`;

export const CheckBoxContainer = styled.div`
    left: 0;
    bottom: 15px;
    display: flex;
    padding: 8px 12px;
    background: white;
    border-radius: 8px;
    align-items: center;
    position: absolute;
    background: ${({ theme }) => theme.palette.background.medium };
    border: 1px solid 
            ${({ theme }) => theme.palette.opacity.dark[20] };
            
    &.checked {
        border: 2px solid 
                ${({ theme }) => theme.palette.primary.main };
    }

    label {
        font-size: 9pt;
        font-weight: 600;
        color: ${({ theme }) => theme.palette.primary.main };
    }

    input {
        top: 0;
        left: 0;
        opacity: 0;
        width: 100%;
        height: 100%;
        cursor: pointer;
        appearance: none;
        position: absolute;
        -webkit-appearance: none;
    }
`;

export const SubmitButton = styled(ButtonSubmit)`

`;
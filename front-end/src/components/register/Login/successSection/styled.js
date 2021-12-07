import styled from 'styled-components';
import { LoginContainer } from '../loginSection/styled';

export const SuccessContainer = styled(LoginContainer)`
    display: flex;
    grid-gap: 10px;
    gap: 0px !important;
	align-items: center;
    flex-direction: column;
    background: transparent;
    justify-content: center;
    
    h6, h2, h3 {
        height: fit-content;
    }

    span {
        width: 8rem;
        height: 8rem;
        display: grid;
        font-size: 4.5rem;
        margin: 1.5rem 0 0;
        border-radius: 50%;
        place-items: center;
        animation: SuccessIcon 2s ease infinite;
        border: 5px solid 
                ${({ theme }) => theme.palette.status.success };
        
        > * {
            fill: ${({ theme }) => theme.palette.status.success };
        }

        @keyframes SuccessIcon {
            0% {
                opacity: 0;
                font-size: 1rem;
            }
            100% {
                opacity: 1;
                font-size: 4.5rem;
            }
        }
    }
`;

export const GreetingsUserText = styled.h2`
    font-size: 20pt;
    line-height: 20pt;
    height: fit-content;
    color: ${({ theme }) => theme.palette.primary.dark };
`;

export const MessageWarning = styled.h3`
	font-size: 18pt;
	color: ${({ theme }) => theme.palette.primary.main };
`;

export const FunctionMessage = styled.h6`
    font-size: 10pt;
    margin: 2rem 0 0;
    animation: firefly ease 1s infinite;
    color: ${({ theme }) => theme.palette.secondary.dark };

    @keyframes firefly {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;
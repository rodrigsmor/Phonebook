import styled from 'styled-components';
import { FormWrapper } from '../RegisterForm/styled';

export const SignupFormContainer = styled(FormWrapper)`
    background: transparent;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
`;

export const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    .cta-left {
        display: flex;
        cursor: pointer;
        font-size: 10pt;
        font-weight: 600;
        padding: 8px 40px;
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
    }
`;
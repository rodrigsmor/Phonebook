import styled from 'styled-components';
import { LoginContainer } from '../loginSection/styled';
import { ButtonSubmit } from '../../RegisterForm/styled';
import { ButtonWrapper } from '../../Signup/SignupForm/styled';

export const ConfirmContainer = styled(LoginContainer)`
    display: grid;
    grid-gap: 5px;
    grid-template-columns: 1fr;
    grid-template-rows: auto max-content;
`;

export const UserProfile = styled.div`
    display: flex;
    grid-row: 1/2;
    grid-gap: 15px;
    grid-column: 1/2;
    align-items: center;
    flex-direction: column;
    background: transparent;
    justify-content: center;

    h4 {
        font-size: 15pt;
    }
`;

export const UserPicture = styled.img`
    width: 12rem;
    height: 12rem;
    border-radius: 50%;
    border: 2px solid
            ${({ theme }) => theme.palette.opacity.dark[40]};
    box-shadow: 0px 0px 8px 0
                ${({ theme }) => theme.palette.opacity.dark[50] };
`;

export const ConfirmButtons = styled(ButtonWrapper)`
    grid-row: 2/3;
    grid-column: 1/2;
    background: transparent;
`;

export const ButtonConfirm = styled(ButtonSubmit)`

`;
import styled from 'styled-components';

export const CheckBoxContainer = styled.div`
    gap: 10px;
    display: flex;
    align-items: center;
`;

export const CheckBoxElement = styled.input`
    width: 20px;
    height: 20px;
    display: grid;
    cursor: pointer;
    appearance: none;
    border-radius: 5px;
    place-items: center;
    -webkit-appearance: none;
    background: ${({ theme }) => theme.palette.background.contrast };
    border: 1px solid ${({ theme }) => theme.palette.opacity.dark[30] };
    
    &:checked {
        &:after {
            opacity: 1;
        }
    }
    
    &:after {
        opacity: 0;
        display: block;
        font-size: 15px;
        content: '\f00c';
        font-weight: 900;
        transition: .2s ease-out;
        font-family: 'Font Awesome 5 Free';
        color: ${({ theme }) => theme.palette.primary.main };
    }
`;

export const Label = styled.label`
    font-size: 12pt;
    font-weight: 500;
`;
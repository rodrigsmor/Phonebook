import styled from 'styled-components';

export const InputBox = styled.div`
    width: 100%;
    position: relative;
    height: fit-content;
`;

export const InputElement = styled.input`
    width: 100%;
    outline: none;
    font-weight: 500;
    padding: 8px 13px;
    position: relative;
    border-radius: 15px;
    z-index: 2;
    background: transparent;
    transition: border .5s linear;
    border: 2px solid
            ${({ theme }) => theme.palette.opacity.dark[10] };
    color: ${({ theme }) => theme.palette.primary.main };
    
    &:focus,
    &:valid {
        border: 2px solid ${({ theme }) => theme.palette.primary.main };
        
        ~ label {
            padding: 0 5px;
            font-size: 12px;
            z-index: 3;
            margin: -5px 0 0 15px;
            background: ${({ theme }) => theme.palette.background.main };
        }
    }
`;

export const LabelComponent = styled.label`
    left: 0;
    cursor: text;
    font-weight: 500;
    position: absolute;
    margin: 8px 0 0 15px;
    transition: .3s linear;
    background: transparent;
    color: ${({ theme }) => theme.palette.primary.main };
`;
import styled from 'styled-components';

export const InputBox = styled.div`
    width: 100%;
    position: relative;
    height: fit-content;
`;

export const InputElement = styled.input`
    width: 100%;
    z-index: 2;
    outline: none;
    font-weight: 500;
    padding: 8px 13px;
    position: relative;
    border-radius: 15px;
    background: transparent;
    transition: border .5s linear;
    border: 2px solid
            ${({ theme }) => theme.palette.opacity.dark[10] };
    color: ${({ theme }) => theme.palette.primary.main };
    
    &:focus,
    &.valid {
        border: 2px solid ${({ theme }) => theme.palette.primary.main };
        
        ~ label {
            z-index: 3;
            padding: 0 5px;
            font-size: 12px;
            margin: -5px 0 0 15px;
            background: ${({ theme }) => theme.palette.background.main };
        }
    }

    &::-ms-reveal {
        opacity: 0;
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
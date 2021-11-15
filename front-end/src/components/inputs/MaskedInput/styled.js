import styled from 'styled-components';
import InputMask from 'react-input-mask';

export const InputMasked = styled(InputMask)`
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
            padding: 0 5px;
            font-size: 12px;
            z-index: 3;
            margin: -5px 0 0 15px;
            background: ${({ theme }) => theme.palette.background.main };
        }
    }
`;
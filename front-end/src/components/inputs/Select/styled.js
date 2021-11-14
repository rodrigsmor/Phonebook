import styled from 'styled-components';
import { 
    InputElement,
    LabelComponent,
} from '../Input/styled';

export const SelectContainer = styled.div`
    width: 100%;
    display: flex;
    width: fit-content;
    position: relative;

    .inputWrapper {
        display: flex;
        width: fit-content;
        height: fit-content;
        align-items: center;
    }
`;

export const SelectInput = styled(InputElement)`
    height: fit-content;
    background: ${({ theme }) => theme.palette.background.main };

    ::-webkit-input-placeholder {
        color: ${({ theme }) => theme.palette.opacity.dark[50] };
    }
    
    &:focus {
        ::-webkit-input-placeholder {
            color: ${({ theme }) => theme.palette.primary.main };
        }
    }
`;

export const LabelSelect = styled(LabelComponent)`
    top: 0;
    z-index: 3;
    padding: 0 5px;
    font-size: 12px;
    margin: -5px 0 0 15px;
    background: ${({ theme }) => theme.palette.background.main };
`;

export const ButtonSelect = styled.button`
    right: 0;
    z-index: 2;
    padding: 5px;
    display: grid;
    cursor: pointer;
    line-height: 0px;
    position: absolute;
    background: transparent;
    place-items: center;
    border: 0px solid transparent;

    svg {
        color: red;
        font-size: 20pt;

        > * {
            color: ${({ theme }) => theme.palette.primary.main  };
        }
    }
`;

export const DropdownContainer = styled.ul`
    top: 0px;
    z-index: 1;
    width: 100%;
    height: 0px;
    display: grid;
    grid-gap: 2px;
    overflow: auto;
    list-style: none;
    position: absolute;
    border-radius: 10px;
    transition: .5s ease;
    background: ${({ theme }) => theme.palette.background.medium };
    
    ::-webkit-scrollbar {
        width: 10px;
        border-radius: 25px;
        border: 4px solid
                ${({ theme }) => theme.palette.background.medium };
        background: ${({ theme }) => theme.palette.opacity.dark[20]  };
    }
    
    ::-webkit-scrollbar-thumb {
        border-radius: 15px;
        background: ${({ theme }) => theme.palette.primary.main };
        border: 4px solid
                ${({ theme }) => theme.palette.background.medium };
    }
    
    &.focus {
        top: 50px;
        padding: 5px;
        height: 105px;
        box-shadow: 0px 0px 8px 1px
                    ${({ theme }) => theme.palette.opacity.dark[20] };
        
    }
`;

export const Options = styled.li`
    cursor: pointer;
    padding: 0 10px;
    line-height: 30px;
    border-radius: 5px;
    transition: .3s linear;
    color: ${({ theme }) => theme.palette.primary.main };

    &:hover {
        background: ${({ theme }) => theme.palette.opacity.dark[10] };
    }
`;
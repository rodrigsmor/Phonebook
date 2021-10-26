import styled from 'styled-components';

export const SearchBox = styled.form`
    gap: 5px;
    width: 250px;
    display: grid;
    height: 2.5rem;
    border-radius: 15px;
    padding: 0 0 0 10px;
    justify-content: space-between;
    grid-template-columns: 1fr 2.5rem;
    background: ${({ theme }) => theme.palette.primary.light };
`;

export const InputBox = styled.input`
    border: none;
    outline: none;
    background: transparent;
    color: ${({ theme }) => theme.palette.primary.dark };
    
    &::-webkit-input-placeholder {
        color: ${({ theme }) => theme.palette.primary.dark };
    }

    &::-webkit-search-cancel-button {
        display: none;
    }
`;

export const SearchButton = styled.button`
    border: none;
    display: grid;
    width: 2.5rem;
    height: 2.5rem;
    line-height: 0;
    font-size: 15pt;
    cursor: pointer;
    position: relative;
    place-items: center;
    background: transparent;

    ::before {
        left: 0;
        width: 1px;
        content: '';
        height: 50%;
        display: block;
        position: absolute;
        background: ${({ theme }) => theme.palette.primary.dark };
    }
`;
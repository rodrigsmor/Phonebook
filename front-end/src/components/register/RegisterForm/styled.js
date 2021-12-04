import styled from 'styled-components';

export const RegisterSection = styled.section`
    display: grid;
    grid-row: 1/2;
    grid-column: 2/3;
    padding: 4.5rem 6rem;
    background: transparent;
    grid-template-columns: 100%;
    grid-template-rows: 35pt 40pt auto;

    h1 {
        font-size: 30pt;
        font-weight: 800;
        line-height: 30pt;
        color: ${({ theme }) => theme.palette.primary.dark };
    }

    h5 {
        height: 40pt;
        font-size: 10pt;
        color: ${({ theme }) => theme.palette.secondary.main };
    }

    &.Entrar {
        grid-column: 1/2;
        /* padding: 8rem 6rem;
        grid-template-rows: 35pt 40pt auto; */
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`;

export const FormWrapper = styled.form`
    width: 100%;
    display: grid;
    grid-gap: 1.2rem;
`;

export const ButtonSubmit = styled.input`
    display: flex;
    cursor: pointer;
    font-size: 10pt;
    font-weight: 600;
    padding: 8px 40px;
    text-align: center;
    border-radius: 15px;
    align-items: center;
    text-decoration: none;
    background: transparent;
    justify-content: center;
    transition: .5s ease-in-out;
    border: 0px solid transparent;
    background: ${({ theme }) => theme.palette.primary.main };
    color: ${({ theme }) => theme.palette.background.contrast };
    
    :hover {
        background: ${({ theme }) => theme.palette.primary.dark };
    }
`;
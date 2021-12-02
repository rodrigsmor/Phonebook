import styled from 'styled-components';

export const RegisterSection = styled.section`
    padding: 4.5rem 6rem;
    display: grid;
    grid-row: 1/2;
    grid-column: 2/3;
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
        font-size: 10pt;
        color: ${({ theme }) => theme.palette.secondary.main };
    }
`;

export const FormWrapper = styled.form`
    width: 100%;
    display: grid;
    grid-gap: 1.2rem;
`;
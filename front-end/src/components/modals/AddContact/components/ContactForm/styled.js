import styled from 'styled-components';

export const ContactFormContainer = styled.section`
    gap: 10px;
    grid-row: 1/2;
    display: flex;
    max-height: 100%;
    grid-column: 2/3;
    flex-direction: column;
    
    h1 {
        font-size: 2em;
        font-weight: 800;
    }
`;

export const FormWrapper = styled.form`
    width: 100%;
    height: 100%;
    display: grid;
    grid-gap: 3vh;
    padding: 0 5px;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: 150px 1fr 1fr;

    .upload {
        width: 150px;
        height: 150px;
        grid-row: 1/3;
        grid-column: 1/2;
    }

    .box-2 {
        grid-row: 1/2;
        grid-column: 2/4;
        height: 100%;
    }

    .box-3 {
        grid-row: 2/3;
        grid-column: 2/4;
    }

    .box-4 {
        grid-row: 3/4;
        grid-column: 1/3;
    }

    .selectContainer {
        grid-row: 3/4;
        grid-column: 3/4;
    }
`;

export const ButtonsWrapper = styled.div`
    gap: 20px;
    display: flex;
    grid-row: 4/5;
    grid-column: 1/4;
    align-items: center;
    justify-content: flex-end;

    button,
    input {
        outline: none;
        cursor: pointer;
        font-size: 15px;
        font-weight: 600;
        padding: 5px 50px;
        border-radius: 15px;
        transition: .5s ease-in-out;
        border: 0px solid transparent;
    }
    
    input {
        color: ${({ theme }) => theme.palette.background.main  };
        background: ${({ theme }) => theme.palette.primary.main };
        
        :hover {
            background: ${({ theme }) => theme.palette.primary.dark };
        }
    }
    
    button {
        background: transparent;

        :hover {
            background: ${({ theme }) => theme.palette.opacity.dark[10] };
        }
    }
`;
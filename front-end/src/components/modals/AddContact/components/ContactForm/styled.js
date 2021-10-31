import styled from 'styled-components';

export const ContactFormContainer = styled.section`
    gap: 20px;
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
    padding: 0 5px;
    grid-gap: 3vh;
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

    .box-5 {
        grid-row: 3/4;
        grid-column: 3/4;
    }
`;

export const InputBox = styled.div`
    width: 100%;
    position: relative;
    height: fit-content;

    label {
        left: 0;
        cursor: text;
        font-weight: 500;
        position: absolute;
        margin: 8px 0 0 15px;
        transition: .3s linear;
        background: transparent;
        color: ${({ theme }) => theme.palette.primary.main };
    }

    input {
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
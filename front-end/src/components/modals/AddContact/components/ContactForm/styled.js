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
    grid-gap: 10px;
    padding: 0 5px;
    grid-template-rows: repeat(5, 1fr);
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
        background: red;
    }

    .box-6 {
        grid-row: 2/3;
        grid-column: 2/4;
        background: pink;
    }

    .box-3 {
        grid-row: 3/4;
        grid-column: 1/3;
        background: blue;
    }

    .box-4 {
        grid-row: 3/4;
        grid-column: 3/4;
        background: green;
    }

    .box-5 {
        grid-row: 5/6;
        grid-column: 1/4;
        background: green;
    }
`;
import styled from 'styled-components';

export const BackgroundScreen = styled.div`
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    z-index: 9;
    display: grid;
    place-items: center;
    position: absolute;
    border-radius: 50%;
    transition: .5s ease;
    
    &.display {
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        border-radius: 0;
        backdrop-filter: blur(25px);
        background: ${({ theme }) => theme.palette.opacity.dark[30] };

        main {
            display: flex;
            visibility: visible;
        }
    }
`;

export const SectionContainer = styled.main`
    width: 0px;
    height: 0px;
    display: flex;
    visibility: hidden;
    
    label,
    button, 
    > * {
        visibility: hidden;
    }
    
    .display & {
        height: 70%;
        width: 60vw;
        z-index: 10;
        transition: .5s ease;
        position: relative;
        border-radius: 15px;
        box-shadow: 0px 0px 10px -1px
                    ${({ theme }) => theme.palette.opacity.dark[20] };

        label,
        button,
        > * {
            visibility: visible;
        }
    }
`;

export const SideBlock = styled.aside`
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    border-radius: 15px 0 0 15px;
    border-right: 5px solid 
                 ${({ theme }) => theme.palette.primary.main };
    justify-content: space-evenly;
    background: ${({ theme }) => theme.palette.opacity.main[60] };

    img {
        width: auto;
        height: 25vh;
    }
`;

export const SectionForm = styled.section`
    gap: 20px;
    padding: 2em;
    height: 100%;
    display: flex;
    position: relative;
    flex-direction: column;
    background: transparent;
    width: calc(100% - 30%);
    border-radius: 0 15px 15px 0;
    justify-content: space-between;
    background: ${({ theme }) => theme.palette.background.main };

    h2 {
        font-weight: 800;
        font-size: 23pt;
    }
`;

export const ContactForm = styled.form`
    width: 100%;
    height: 100%;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 3fr 2fr;
    grid-template-rows: repeat(3, 1fr) 35px;
`;

export const BoxInput = styled.div`
    gap: 5px;
    display: flex;
    flex-direction: column;
    
    :nth-child(1) {
        grid-row: 1/2;
        grid-column: 1/3;
    }

    :nth-child(2) {
        grid-row: 2/3;
        grid-column: 1/3;
    }

    :nth-child(3) {
        grid-row: 3/4;
        grid-column: 1/2;
    }

    :nth-child(4) {
        background: yellowgreen;
        grid-row: 3/4;
        grid-column: 2/3;
    }

    span {
        font-size: small;
        font-weight: 600;
        margin: 0 0 0 15px;
        color: ${({ theme }) => theme.palette.status.error };
    }
`;

export const InputWrapper = styled.section`
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

export const ButtonWrapper = styled.section`
    gap: 20px;
    display: flex;
    grid-row: 4/5;
    grid-column: 1/3;
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
`
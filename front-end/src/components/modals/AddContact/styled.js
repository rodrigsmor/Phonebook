import styled from 'styled-components';

export const BackgroundScreen = styled.div`
    top: 50%;
    left: 50%;
    width: 0px;
    z-index: 1;
    height: 0px;
    display: grid;
    position: absolute;
    border-radius: 50%;
    place-items: center;
    transition: .5s ease;
    
    &.display {
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        border-radius: 0;
        backdrop-filter: blur(25px);
        background: ${({ theme }) => theme.palette.opacity.dark[30] };
    }
`;

export const MainContentBox = styled.main`
    opacity: 0;
    visibility: hidden;

    .display & {
        width: 60%;
        opacity: 1;
        height: 70%;
        padding: 2em;
        display: grid;
        grid-gap: 1em;
        visibility: visible;
        border-radius: 15px;
        grid-template-rows: 1fr;
        transition: all .5s ease;
        grid-template-columns: 1fr 2fr;
        background: ${({ theme }) => theme.palette.background.main };
        box-shadow: 0px 0px 10px -1px
                    ${({ theme }) => theme.palette.opacity.dark[20] };
    }
`;
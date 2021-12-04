import styled from "styled-components";

export const IllustrationContainer = styled.section`
    display: flex;
    grid-row: 1/2;
    grid-column: 1/2;
    align-items: center;
    padding: 15% 0 15% 15%;
    justify-content: center;
    
    img {
        width: 100%;
        height: 100%;
    }
    
    &.login {
        grid-column: 2/3;
        padding: 15% 15% 15% 0;
    }
`;
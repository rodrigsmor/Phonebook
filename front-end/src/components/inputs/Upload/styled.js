import styled from 'styled-components';

export const UploadContainer = styled.div`
    display: grid;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    border-radius: 50%;
    place-items: center;
    background: ${({ theme }) => theme.palette.background.main };
    box-shadow: 0px 0px 8px 0
                ${({ theme }) => theme.palette.opacity.dark[50] };
    
    input {
        display: none;
    }

    .userIcon {
        width: 100%;
        height: 100%;
        position: absolute;
        background: transparent;

        g {
            fill: ${({ theme }) => theme.palette.primary.main };
        }
    }
    
    span {
        width: 0px;
        height: 0px;
        position: absolute;
        border-radius: 50%;
        transition: .3s ease;
    }

    img {
        width: 100%;
        height: auto;
    }

    :hover {
        span {
            width: 100%;
            height: 100%;
            background: ${({ theme }) => theme.palette.opacity.dark[50] };
        }
    }
`;

export const LabelUpload = styled.label`
    width: 100%;
    height: 100%;
    display: grid;
    z-index: 2;
    cursor: pointer;
    position: absolute;
    place-items: center;

    svg {
        font-size: 3em;
        fill: transparent;
        transition: .3s ease;
    }

    :hover {
        svg {
            fill: ${({ theme }) => theme.palette.opacity.main[80] };
        }
    }
`;
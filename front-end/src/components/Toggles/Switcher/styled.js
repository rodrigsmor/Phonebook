import styled from 'styled-components';

export const SwitchWrapper = styled.div`
    display: flex;
    width: 2.5rem;
    height: 1.5rem;
    padding: 0 2px;
    position: relative;
    align-items: center;
    border-radius: 15px;
    background: ${({ theme }) => theme.palette.primary.light };
    
    button {
        left: 0;
        border: none;
        width: 1.2rem;
        height: 1.2rem;
        cursor: pointer;
        border-radius: 50%;
        background: greenyellow;
        transition: .5s ease-out;
        background: ${({ theme }) => theme.palette.background.contrast };

        svg {
            font-size: 10px;
        }

        &.dark {
            margin-left: 0;

            svg {
                fill: #bcd8e5;
            }
        }
        
        &.light {
            margin-left: 50%;
            
            svg {
                fill: #efcd41;
            }
        }
    }

    span.clicked {
        right: 0;
    }
`;
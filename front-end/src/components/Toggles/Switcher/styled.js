import styled from 'styled-components';

export const SwitchWrapper = styled.div`
    display: flex;
    padding: 0 2px;
    position: relative;
    align-items: center;
    border-radius: 15px;
    background: ${({ theme }) => theme.palette.background.contrast };
    
    button {
        border: none;
        cursor: pointer;
        transition: .5s ease-out;
        background: ${({ theme }) => theme.palette.background.main };
        
        svg {
            font-size: 10px;
        }
        
        &.dark {            
            svg {
                fill: #bcd8e5;
            }
        }
        
        &.light {            
            svg {
                fill: #e6b909;
            }
        }
    }
    
    span.clicked {
        right: 0;
    }
    
    @media screen and (min-width: 769px) {
        width: 2.5rem;
        height: 1.5rem;
        
        button {
            left: 0;
            width: 1.2rem;
            height: 1.2rem;
            position: absolute;
            border-radius: 50%;
            box-shadow: 0px 0px 1px 1px
                ${({ theme }) => theme.title === 'light'
                    ? theme.palette.opacity.dark[20]
                    : 'transparent'
                }
            ;
            
            &.dark {
                left: 3px;
            }
            
            &.light {
                left: calc((100% / 2) - 3px);
            }
        }
    }

    @media screen and (max-width: 768px) {
        width: fit-content;
        height: fit-content;
        padding: 0px;
        background: transparent;

        button {
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 15px;
            background: transparent;
        
            svg {
                font-size: 20pt;

            }

            &.dark,
            &.light {
                
                svg {
                    fill: ${({ theme }) => theme.palette.background.main };
                }
            }
        }
    }
`;
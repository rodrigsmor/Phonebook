import styled from 'styled-components';

export const StatisticsContainer = styled.aside`
    display: flex;
    grid-row: 2/5;
    margin: 0 0 20px 0;
    flex-direction: column;
    justify-content: space-between;

    h3 {
        display: flex;
        line-height: 1.17em;
        align-items: center;
    }

    @media screen and (max-width: 768px) {
        margin: 0;
        gap: 20px;

        h3 {
            font-size: 17pt;
        }
    }
`;

export const StatisticsTable = styled.table`
    width: 100%;
    display: table;
    height: max-content;
    border-spacing: 0 15px;
    border-collapse: separate;

    tr {
        font-size: 13px;

        th {
            font-weight: 600;
            text-align: left;
            color: ${({ theme }) => theme.palette.secondary.main };
        }

        td {
            text-align: right;
            color: ${({ theme }) => theme.palette.primary.main };
        }
    }

    @media screen and (max-width: 768px) {
        border-spacing: 0 20px;

        tr {
            font-size: 11pt;
        }
    }
`;

export const CategoriesButton = styled.button`
    outline: none;
    cursor: pointer;
    font-size: 15px;
    padding: 5px 10px;
    border-radius: 10px;
    transition: .5s linear;
    border: 0px solid transparent;
    background: ${({ theme }) => theme.palette.primary.main };
    color: ${({ theme }) => theme.palette.background.contrast };
    
    :hover {
        background: ${({ theme }) => theme.palette.primary.dark };
    }
`;
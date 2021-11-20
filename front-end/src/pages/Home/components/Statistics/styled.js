import styled from 'styled-components';

export const StatisticsContainer = styled.aside`
    grid-row: 2/5;
    display: flex;
    margin: 0 0 20px 0;
    flex-direction: column;
    justify-content: space-between;

    h3 {
        display: flex;
        line-height: 1.17em;
        align-items: center;
    }
`;

export const StatisticsTable = styled.table`
    display: table;
    width: 100%;
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
`;

export const CategoriesButton = styled.button`
    outline: none;
    cursor: pointer;
    font-size: 15px;
    margin: 20px 0 0;
    padding: 5px 20px;
    border-radius: 10px;
    transition: .5s linear;
    border: 0px solid transparent;
    background: ${({ theme }) => theme.palette.primary.main };
    color: ${({ theme }) => theme.palette.background.contrast };
    
    :hover {
        background: ${({ theme }) => theme.palette.primary.dark };
    }
`;
import styled from "styled-components";

export const AdminWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    row-gap: 2rem;
`;

export const TableWrapper = styled.table`
    border-collapse: collapse;
`;

export const TableThead = styled.thead`
`;

export const TableTbody = styled.tbody`
    border-top: 1rem solid #fff;
`;


export const TableTr = styled.tr`
    color: #c74646;

    :nth-child(odd) {
        color: #fff;
        background-color: #c74646;
        border-color: #fff;
   }
`;

export const TableTd = styled.td`
    border: 1px solid #c74646;
    padding: 2rem;
    border: 1px solid inherit;
`;
export const ProductTh = styled.th`
    padding: 2rem;
    border: 1px solid #fff;
`;
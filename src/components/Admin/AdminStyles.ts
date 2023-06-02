import styled from "styled-components";


interface ITableColorProps {
    defaultRowBgColor?: string,
    oddRowBgColor?: string,

    defaultRowTextColor?: string,
    oddRowTextColor?: string
}

export const AdminWrapper = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    row-gap: 2rem;
`;

export const TableWrapper = styled.table`
    border-collapse: collapse;
    margin-bottom: 10rem;
`;

export const TableThead = styled.thead`
`;

export const TableTbody = styled.tbody`
    border-top: 5rem solid #fff;
`;


export const TableTr = styled.tr<ITableColorProps>`
    font-size: 1.8rem;
    color: ${props => props.defaultRowTextColor ? props.defaultRowTextColor : "#c74646"};
    background-color: ${props => props.defaultRowBgColor ? props.defaultRowBgColor : "#fff"};

    :nth-child(odd) {
        color: ${props => props.oddRowTextColor ? props.oddRowTextColor : "#fff"};
        background-color: ${props => props.oddRowBgColor ? props.oddRowBgColor : "#c74646"};
    }

    :last-child {
        border-bottom: 0;
    }
`;

export const TableTd = styled.td`
    padding: 2rem;
`;

export const ProductTh = styled.th`
    padding: 2rem;
    border: 1px solid #fff;
`;



export const RemoveBtn = styled.button`
    transition: transform .7s cubic-bezier(.22,.81,.68,1.04);
    :hover {
        transform: scale(1.8);
    }
`;

export const EditBtn = styled.button`
    transition: transform .7s cubic-bezier(.22,.81,.92,.99);
    :hover {
        transform: scale(1.8);
    }
`;
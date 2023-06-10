import styled from "styled-components";
import { XLg } from "@styled-icons/bootstrap/XLg";
import { Pencil } from "@styled-icons/bootstrap/Pencil";


interface ITableColorProps {
    defaultRowBgColor?: string,
    oddRowBgColor?: string,

    defaultRowTextColor?: string,
    oddRowTextColor?: string
}

interface IStyledIconsProps {
    colorindex: number
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

    width: 100%;
`;

export const TableThead = styled.thead`
`;

export const TableTbody = styled.tbody`
    border-top: 5rem solid #fff;
`;


export const TableTr = styled.tr<ITableColorProps>`
    font-size: 1.8rem;
    color: ${props => props.defaultRowTextColor ? props.defaultRowTextColor : "#000"};
    background-color: ${props => props.defaultRowBgColor ? props.defaultRowBgColor : "#fff"};

    :nth-child(odd) {
        color: ${props => props.oddRowTextColor ? props.oddRowTextColor : "#fff"};
        background-color: ${props => props.oddRowBgColor ? props.oddRowBgColor : "#000"};
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
    transition: transform .5s cubic-bezier(.22,.81,.68,1.04);
    :hover {
        transform: scale(1.8);
    }
`;

export const EditBtn = styled.button`
    transition: transform .5s cubic-bezier(.22,.81,.92,.99);
    :hover {
        transform: scale(1.8);
    }
`;

export const XLgIcon = styled(XLg)<IStyledIconsProps>`
    color: ${props => props.colorindex%2===0?"#fff":"#000"};
    width: 2rem;
    height: 2rem;
`;

export const PencilIcon = styled(Pencil)<IStyledIconsProps>`
    color:  ${props => props.colorindex%2===0?"#fff":"#000"};
    width: 2rem;
    height: 2rem;
`;
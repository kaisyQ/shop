import React from "react";

import { TableTr, TableTd, RemoveBtn, XLgIcon, TableTdInner } from "components/Admin/AdminStyles";

import { RatingScore } from "types/types";

interface ITableRowProps{
    id: string,
    author: string,
    date: Date,
    text: string,
    index: number,
    rating: RatingScore,
    delete: (id: string) => void
}

const TableRow: React.FC<ITableRowProps> = (props) => {

    return (
        <>
            <TableTr key={ props.id }>
                <TableTd>
                    <TableTdInner>{ props.index+1 }</TableTdInner>
                </TableTd>
                <TableTd>
                    <TableTdInner>{ props.author }</TableTdInner>
                </TableTd>
                <TableTd>
                    <TableTdInner>{ props.date.toLocaleDateString() }</TableTdInner>
                </TableTd>
                <TableTd>
                    <TableTdInner>{ props.text }</TableTdInner>
                </TableTd>
                <TableTd>
                    <TableTdInner>{ props.rating }</TableTdInner>
                </TableTd>
                <TableTd>
                    <TableTdInner>
                        <RemoveBtn onClick={(ev) => props.delete(props.id)}>
                            <XLgIcon colorindex={props.index} />
                        </RemoveBtn>
                    </TableTdInner>
                </TableTd>
            </TableTr>
        </>
    );
}

export default React.memo(TableRow);
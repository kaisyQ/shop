import React from "react"
import styled from "styled-components"


const SessionItemWrapper = styled.div`
    position: relative;
    font-size: 1.3rem;
    padding: 1.5rem;
    text-align: left;
    margin-bottom: 2rem;
    background: brown;
    color: #fff;
    :hover {
        transition: all .3s;
        transform: scale(1.1);
    }
    box-shadow: 0.3rem 0.5rem 1rem 0 rgba(0, 0, 0, 0.3);

`

const Button = styled.button`
    position: absolute;
    right: 1rem;
    top: 1rem;

    background-color: #fff;
    color: brown;
    padding: .7rem 1.5rem;

    :hover {
        transition: all .2s;
        color: darkblue;
    }
`


export default ({ id, index, expiresAt, roleId,  deleteSessionThunk }) => {

    const onDeleteSessionBtnClick = (ev) => {
        deleteSessionThunk(id)        
    } 

    return (
        <>
            <SessionItemWrapper>
                { roleId === 1 ? <></> :<Button onClick={onDeleteSessionBtnClick}>Delete</Button> }
                <div>Session number :  {index}</div>
                <div>Session id : {id}</div>
                <div>ExpiresAt : {(new Date(expiresAt)).toUTCString()}</div>
            </SessionItemWrapper>
        </>
    )
}
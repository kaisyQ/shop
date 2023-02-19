import React from "react"
import styled from "styled-components"


const SwssionItemWrapper = styled.div`
    position: relative;
    font-size: 1.3rem;
    padding: 1.5rem;
    text-align: left;
    margin-bottom: 2rem;
    background: brown;
    color: #fff;
    border-radius: 1rem;
    :hover {
        transition: all .3s;
        transform: scale(1.1);
    }
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


export default ({ id, index, expiresAt }) => {
    return (
        <>
            <SwssionItemWrapper>
                <Button>Delete</Button>
                <div>Session number :  {index}</div>
                <div>Session id : {id}</div>
                <div>ExpiresAt : {(new Date(expiresAt)).toUTCString()}</div>
            </SwssionItemWrapper>
        </>
    )
}
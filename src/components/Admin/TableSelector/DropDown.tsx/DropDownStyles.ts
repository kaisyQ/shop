import styled from "styled-components";


interface IDropDownItemsProps {
    visible: string
}

interface IDropDownLiProps {
    marginRight: string
}


export const DropDownLi = styled.li<IDropDownLiProps>`
    margin-right: ${props => props.marginRight};
    transition: margin-right .7s cubic-bezier(0.34, 0.8, 0.61, 1.03);
`;

export const DropDownItems = styled.div<IDropDownItemsProps>`
    display: flex;
    flex-direction: row-reverse;

    visibility: ${props => props.visible};
    transition: visibility .5s cubic-bezier(0, 1.07, 1, 0.36);

    @media only screen and (max-width: 768px){
        flex-direction: row;
    }
    
    @media only screen and (max-width: 330px){
        flex-direction: row;
    }
`;

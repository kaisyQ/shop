import React from "react";

import Button from "../../../Custom/Button/Button";

import { NavLink } from "react-router-dom";

import { 
    Wrapper, 
    CardTitle,
    CardSaleTitle,
    CardImageWrapper, 
    CardImage, 
    CardInfoWrapper, 
    CardInfoItem,

} from "./ProductStyles";


interface IProductProps {
    id: string,
    count: number,
    name: string,
    imageSrc: string, 
}

const Product: React.FC<IProductProps> = (props) => {
    const { count, name, imageSrc, id } = props;
    
    console.log(props);
    return (
        <>
            <Wrapper>
                <CardSaleTitle>
                    { count === 0 ? 'Sold out' : 'Sale' }
                </CardSaleTitle>
                <NavLink to={`/catalog/${id}`}>
                    <CardImageWrapper>
                        <CardImage 
                            src={imageSrc}
                            alt="Card image" 
                        />
                    </CardImageWrapper>
                </NavLink>
                <CardInfoWrapper>
                    <NavLink to={`/catalog/${id}`}>
                        <CardInfoItem>
                            <CardTitle>{ name }</CardTitle>
                        </CardInfoItem>
                    </NavLink>
                    <CardInfoItem>
                        <NavLink to={`/catalog/${id}`}>
                            <Button isReverse={true}>Show More</Button>
                        </NavLink>
                    </CardInfoItem>
                </CardInfoWrapper>
            </Wrapper>
        </>
    );
}

export default React.memo(Product);
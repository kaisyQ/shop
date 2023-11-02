import React from "react";

import Button from "../../../Custom/Button/Button";

import { NavLink } from "react-router-dom";

import { API_URL } from "constants/constants";

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
    slug: string
}

const Product: React.FC<IProductProps> = (props) => {
    const { count, name, imageSrc, id } = props;
    
    return (
        <>
            <Wrapper>
                <CardSaleTitle>
                    { count === 0 ? 'Sold out' : 'Sale' }
                </CardSaleTitle>
                <NavLink to={`/catalog/${props.slug}`}>
                    <CardImageWrapper>
                        <CardImage 
                            src={`${API_URL}${imageSrc}`}
                            alt="Card image" 
                        />
                    </CardImageWrapper>
                </NavLink>
                <CardInfoWrapper>
                    <NavLink to={`/catalog/${props.slug}`}>
                        <CardInfoItem>
                            <CardTitle>{ name }</CardTitle>
                        </CardInfoItem>
                    </NavLink>
                    <CardInfoItem>
                        <NavLink to={`/catalog/${props.slug}`}>
                            <Button isReverse={true}>Show More</Button>
                        </NavLink>
                    </CardInfoItem>
                </CardInfoWrapper>
            </Wrapper>
        </>
    );
}

export default React.memo(Product);
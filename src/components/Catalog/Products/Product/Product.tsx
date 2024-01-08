import React from "react";

import SaleImage from './../../../../images/sale.png';
import SoldOutImage from './../../../../images/out-of-stock.png';
import { NavLink } from "react-router-dom";
import { Button, Card, CardBody, CardFooter, Image } from "@nextui-org/react";

import { 
    Wrapper, 
    CardTitle,
    CardSale,
    CardPrice,

} from "./ProductStyles";
import { Product as ProductModel } from "models/Product";
interface IProductProps {
    product: ProductModel
}
const Product: React.FC<IProductProps> = (props) => {
    return (
        <>
            <Wrapper>
                <NavLink to={`/catalog/${props.product.slug}`}>
                    <Card className="py-4 shadow-none">
                        <CardBody className="overflow-visible py-2 relative">
                            <CardSale>
                                {
                                    props.product.count === 0 ? <>
                                        <Image alt="sold_out_icon" src={SoldOutImage} className="w-10"/>
                                    </> : <>
                                        <Image alt="sale_icon" src={SaleImage} className="w-10"/>
                                    </>
                                }
                            </CardSale>
                            <Image
                                isZoomed
                                alt="product image"
                                className="object-cover rounded-none"
                                src={props.product.imagesSrc[0]}
                            />
                            <CardPrice>
                                { props.product.getCurrentPriceWithVal() }
                            </CardPrice>
                        </CardBody>
                        <CardFooter className="d-flex flex-col items-start">
                            <CardTitle>{ props.product.name }</CardTitle>
                            <div>
                                <Button 
                                        className="dark"
                                        variant="solid"
                                        size="lg"
                                    >
                                        Show More
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
                </NavLink>
            </Wrapper>
        </>
    );
}

export default React.memo(Product);
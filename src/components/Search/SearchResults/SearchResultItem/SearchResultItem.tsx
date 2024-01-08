import React from "react";
import { Wrapper, NameBlock } from "./SearchResultItemStyles";
import { NavLink } from "react-router-dom";
import { SearchedProduct } from "models/SearchedProduct";
import { Button, Image, Card, CardHeader, CardBody } from "@nextui-org/react";

interface ISearchResultItemProps {
    index: number,
    searchedProduct: SearchedProduct
}

const SearchResultItem: React.FC<ISearchResultItemProps> = (props) => {
    return (
        <>      
            <Wrapper>

                <NavLink to={`/catalog/${props.searchedProduct.slug}`}>
                
                    <Card className="dark">

                        <CardHeader>
                        
                            <NameBlock>{ props.searchedProduct.name }</NameBlock>
                        
                        </CardHeader>
                        
                        <CardBody>
                        
                            <Image src={props.searchedProduct.image} />

                            <Button className="dark" size="lg">Show</Button>
                        
                        </CardBody>
                    </Card>
                
                </NavLink>

            </Wrapper>
        </>
    );
}

export default SearchResultItem;
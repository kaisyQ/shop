import React from "react"
import styled from "styled-components"

import Filter from "components/Catalog/Filter/Filter"
import ProductsContainer from "components/Catalog/Products/ProductsContainer"
import Title from "components/Custom/Title/Title"
import MobileFilter from "components/Catalog/MobileFilters/MobileFilters"
import {useDisclosure, Button} from '@nextui-org/react';
import useWindowWidth from "hooks/useWindowWidth"

const Wrapper = styled.div`
    z-index: 9;
`

const TitleWrapper = styled.div`
    text-align: left;
    margin-bottom: 20px;
`
const FilterWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 10px;
`;

const CatalogView = () => {
    
    const {isOpen, onOpen, onClose} = useDisclosure();
    const width = useWindowWidth();

    return (
        <>
            <Wrapper>
                <TitleWrapper>
                    <Title>Catalog</Title>
                </TitleWrapper>
                
                {
                    width < 768 ? <FilterWrapper>
                        
                        <Button radius="sm" className="dark" size="lg" onClick={() =>  onOpen()}>Filters</Button>

                        <MobileFilter visible={isOpen} onClose={onClose}/>
                    
                    </FilterWrapper> : <>

                        <Filter />
                    
                    </>
                }
                
                <ProductsContainer />
            
            </Wrapper>
        </>
    );
}

export default CatalogView;
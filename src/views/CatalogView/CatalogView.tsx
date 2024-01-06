import React from "react"
import styled from "styled-components"

import Filter from "components/Catalog/Filter/Filter"
import ProductsContainer from "components/Catalog/Products/ProductsContainer"
import Title from "components/Custom/Title/Title"


const Wrapper = styled.div`
    z-index: 9;
`

const TitleWrapper = styled.div`
    text-align: left;
    margin-bottom: 2rem;
`

const CatalogView = () => {
    
    return (
        <>
            <Wrapper>
                <TitleWrapper>
                    <Title>Catalog</Title>
                </TitleWrapper>
                <Filter />
                <ProductsContainer />
            </Wrapper>
        </>
    );
}

export default CatalogView;
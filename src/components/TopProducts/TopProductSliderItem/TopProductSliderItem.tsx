import React from 'react';
import styled from 'styled-components';
import { Image } from '@nextui-org/react';

const Wrapper = styled.div`
    position: relative;
    border-radius: 14px;
    background: #000;
    z-index: 22222;
    ::after {
        content: '';
        display: block;
        position: absolute;
        border-radius: 14px;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        z-index: 999;
        background: linear-gradient(to top,rgba(0,0,0,.9), rgba(0,0,0,.8), rgba(0,0,0,.5), rgba(0,0,0,0));
    }
`;

const About = styled.div`
    width: 100%;
    padding: 10px;
    color: #fff;
    z-index: 22223;
    position: absolute;
    bottom: 10px;
`;

const Name = styled.h4`
    font-size: 24px;
    text-transform: capitalize;
    @media only screen and (max-width: 350px) {
        font-size: 16px;
    }
`;

const Price = styled.h4`
    font-size: 20px;
    margin-top: 5px;
    color: orange;
    margin-left: 10px;
    @media only screen and (max-width: 350px) {
        font-size: 14px;
    }
`;

interface Props {
    image: string,
    name: string,
    price: number
}


const TopProductSliderItem: React.FC<Props> = (props) => {
    return (
        <>
            <Wrapper>
            
                <Image src={props.image} />
                
                <About>
                    
                    <Name>{props.name}</Name>
                    
                    <Price>{`$${props.price}(CAD)`}</Price>
                
                </About>
        
            </Wrapper>
        </>
    );
}

export default TopProductSliderItem;
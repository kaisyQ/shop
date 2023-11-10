import React from "react";

import { SectionsWrapper } from "./SectionsStyles";

import Section from "./Section/Section";
import DimIcon from './../../../../../Custom/Icons/DimIcon';
import SofaIcon from './../../../../../Custom/Icons/SofaIcon';
import TruckIcon from './../../../../../Custom/Icons/DeliveryIcon';


interface ISectionsProps {
    description: string,
    params: {
        Width: string,
        Height: string,
        Depth: string
    },
    delivery: string
}

const Sections: React.FC<ISectionsProps> = ({ description, params, delivery }) => {
    return (
        <>
            <SectionsWrapper>
                <Section title={'About Product'} text={description}>
                    <SofaIcon width="64" height="64" />
                </Section>

                <Section title={'Dimensions'} params={params}>
                    <DimIcon width="64" height="64" />
                </Section>

                <Section title={'About Delivery'} text={delivery} >
                    <TruckIcon width="64" height="64" />
                </Section>
            </SectionsWrapper>
        </>
    );
}

export default Sections;
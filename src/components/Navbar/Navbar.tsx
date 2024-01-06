import React from "react";
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import {Tabs, Tab} from "@nextui-org/react";

const Wrapper = styled.div`
    margin: 20px 0;
`;

const Navbar: React.FC = () => {

    const navigate = useNavigate();

    let handleTabsChange = (ev: string | number) => {
        navigate(ev.toString());
    }

    return (
        <>
            <Wrapper>

                <Tabs className="light" size="lg" aria-label="Routes" variant="underlined" onSelectionChange={handleTabsChange}>

                    <Tab key="home" title="Home" />

                    <Tab key="catalog" title="Catalog" />

                    <Tab key="contact" title="Contact" />

                    <Tab key="sell-your-sofa" title="Sell your sofa" />

                </Tabs>

            </Wrapper>
        </>
    );
}

export default Navbar;
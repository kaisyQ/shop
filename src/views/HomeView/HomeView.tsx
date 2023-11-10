import React from "react";


import CommentsContainer from "components/Comments/CommentsContainer";

import TopProductsContainer from "components/TopProducts/TopProductsContainer";

import { Wrapper, PreviewImage, Slogan } from "./HomeViewStyles";
import { useLocation } from "react-router-dom";

interface IHomeViewProps {

}

const HomeView: React.FC<IHomeViewProps> = () => {
    return (
        <>
            <Wrapper>
                <PreviewImage 
                    src='https://www.remontbp.com/wp-content/uploads/2017/04/6-13.jpg' 
                    alt="preview-image"
                />
                <Slogan>
                    We help you to find your sofa and save the environment
                </Slogan>
                <TopProductsContainer />
                <CommentsContainer />
            </Wrapper>
        </>
    );
}

export default HomeView;
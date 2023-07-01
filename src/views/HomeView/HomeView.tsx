import React from "react";


import CommentsContainer from "components/Comments/CommentsContainer";

import TopProductsContainer from "components/TopProducts/TopProductsContainer";

import { Wrapper, PreviewImage, Slogan } from "./HomeViewStyles";

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
                    Our sofas like Lincolns -- except they dont make your ass hurt 
                </Slogan>
                <TopProductsContainer />
                <CommentsContainer />
            </Wrapper>
        </>
    );
}

export default HomeView;
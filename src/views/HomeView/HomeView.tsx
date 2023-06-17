import React from "react";

import Title from "components/Custom/Title/Title";

import Comments from "./../../components/Comments/Comments";

import { Wrapper, PreviewImage, Slogan } from "./HomeViewStyles";


export default () => {
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
                <Comments />
            </Wrapper>
        </>
    );
}
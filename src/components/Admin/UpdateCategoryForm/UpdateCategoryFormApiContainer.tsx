import React from "react";
import UpdateCategoryForm from "./UpdateCategoryForm";
import { IConnectedProps } from "./UpdateCategoryFormContainer";
import { useParams } from "react-router-dom";

interface IUpdateCategoryApiContainerProps extends IConnectedProps {}

const UpdateCategoryApiContainer: React.FC<IUpdateCategoryApiContainerProps> = (props) => {
    
    const {slug} = useParams();

    React.useEffect(() => {

        if (slug) {
            props.fetchCategoryBySlug(slug)
        }

        return () => {
            props.setCurrent(null);
        }

    }, [slug])

    
    if (props.current) {
        return (
            <>
            
                <UpdateCategoryForm current={props.current} fetchToUpdateCategory={props.fetchToUpdateCategory}/>

            </>
        );
    }
    return null;
}

export default UpdateCategoryApiContainer;
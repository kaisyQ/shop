import React from "react";
import { ICategory } from "redux/reducers/categories/categories.slice";
import Input from "components/Custom/Input/Input";
import Button from "components/Custom/Button/Button";
import Elements from "./UpdateCategoryFormElements";

interface UpdateCategoryProps {
    current: ICategory,
    fetchToUpdateCategory: (arg: {
        name: string;
        slug: string;
    }) => Promise<any> & {
        abort: (reason?: string | undefined) => void;
        requestId: string;
        arg: {
            name: string;
            slug: string;
        };
        unwrap: () => Promise<any>;
    };
}

const UpdateCategoryForm:React.FC<UpdateCategoryProps> = ({current, fetchToUpdateCategory}) => {
    
    const [name, setName] = React.useState(current.name)

    const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        fetchToUpdateCategory({name, slug: current.slug});
    }

    return (
        <>
            <Elements.FormWrapper onSubmit={onSubmit}>

                <Elements.FormElement>
                
                    <Input 
                        value={name}
                        placeholder="Category name"
                        onChange={(ev) => setName(ev.target.value)}
                        id="UpdateCategoryForm/name"
                    />
                
                </Elements.FormElement>

                <Elements.FormElement>

                    <Button isReverse={true} type="submit">Update</Button>

                </Elements.FormElement>

            </Elements.FormWrapper>
        </>
    );
}

export default UpdateCategoryForm;
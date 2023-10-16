import React from "react";
import Elements from "./CreateCategoryFormElements";
import Input from "components/Custom/Input/Input";
import Button from "components/Custom/Button/Button";

import { IConnectedProps } from "./CreateCategoryFormContainer";

const CreateCategoryForm:React.FC<IConnectedProps> = ({fetchToCreateCategory}) => {
    const [name, setName] = React.useState("")

    const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        fetchToCreateCategory(name);
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

                    <Button isReverse={true} type="submit">Create</Button>

                </Elements.FormElement>

            </Elements.FormWrapper>
        </>
    );
}

export default CreateCategoryForm;
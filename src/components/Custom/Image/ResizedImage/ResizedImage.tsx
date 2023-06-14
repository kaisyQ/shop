import React from "react";
import { Modal, ModalContent, ResizedImageContent, CloseBtn, BtnTextSpan } from "./ResizedImageStyle";

interface IResizedImageProps {
    active: boolean,
    setActive: React.Dispatch<React.SetStateAction<boolean>>,
    src: string
}

export const ResizedImage: React.FC<IResizedImageProps> = ({ active, setActive, src }) => {

    const hideModal = () => {
        setActive(false)
    }

    const preventHideModal = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation()
    }

    return (
        <>
            <Modal block={active ? "block" : "none"} onClick={hideModal}>
                <ModalContent onClick={preventHideModal}>
                    <ResizedImageContent src={src}/>
                    <CloseBtn onClick={hideModal}>
                        <BtnTextSpan>
                            Close
                        </BtnTextSpan>
                    </CloseBtn>
                </ModalContent>
            </Modal>
        </>
    )
}
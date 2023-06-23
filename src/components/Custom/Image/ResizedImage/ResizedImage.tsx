import React from "react";
import { Modal, ModalContent, ResizedImageContent, ModalContentWrapper } from "./ResizedImageStyle";

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
            <Modal block={active ? "block" : "none"} onClick={hideModal} onTouchEnd={hideModal}>
                <ModalContentWrapper>
                    <ModalContent onClick={preventHideModal}>
                        <ResizedImageContent src={src}/>
                    </ModalContent>
                </ModalContentWrapper>
            </Modal>
        </>
    )
}
import React from "react";
import { ModalMessage } from "./ConfirmModalStyles";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button} from "@nextui-org/react";

interface IConfirmModalProps {
    message: string,
    isOpen: boolean,
    callback: () => void,
    onOpenChange: () => void,
}

 
const ConfirmModal: React.FC<IConfirmModalProps> = ({ message, callback, isOpen, onOpenChange }) => {

    const confirmClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
        callback();
    }

    return (
        <>
            <Modal className="dark text-white" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">Сonfirm action</ModalHeader>
                        
                        <ModalBody>
                        
                            <ModalMessage>{ message }</ModalMessage>
                        
                        </ModalBody>
                        
                        <ModalFooter>
                        
                            <Button color="danger" variant="solid" onPress={onClose}>
                                Close
                            </Button>
                        
                            <Button color="primary" onPress={onClose} onClick={confirmClick}>
                                Action
                            </Button>
                        
                        </ModalFooter>
                    </>
                )}
                </ModalContent>
            </Modal>
        </>
    );
}

export default ConfirmModal;
import React from "react";

import { ConfirmModalWrapper, ModalActions, ModalMessage, ModalTitle, Timer } from "./ConfirmModalStyles";

import Button from "components/Custom/Button/Button";

import type { ConfirmModalConnectedProps } from "./ConfirmModalContainer";


interface IConfirmModalProps extends ConfirmModalConnectedProps{
    
}

 
const ConfirmModal: React.FC<IConfirmModalProps> = ({ message, callback, setConfirmModalData }) => {
    
    const date = new Date();
    const seconds = date.getSeconds();
    const min = date.getMinutes();
    const hours = date.getHours();

    const [time, setTime] = React.useState(0);
    const [startTime, setStartTime] = React.useState(hours*60*60+min*60+seconds);

    React.useEffect(() => {
        const updateTime = () => {
            const date = new Date();
            const seconds = date.getSeconds();
            const min = date.getMinutes();
            const hours = date.getHours();
            if (time === 9) {
                setConfirmModalData({
                    isVisible: false,
                    callback: null,
                    message: null
                });
                clearInterval(timer);
                return;
            }
            setTime(() => {
                return hours*60*60+min*60+seconds-startTime
            });
        }
        
        const timer = setInterval(updateTime, 1000);

        return () => {
            clearInterval(timer);
        }
    }, [time]);


    const confirmClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
        if (callback) {
            callback();
            setConfirmModalData({
                isVisible: false,
                callback: null,
                message: null
            });
        }
    }

    const cancelClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
        setConfirmModalData({
            isVisible: false,
            callback: null,
            message: null
        });
    }

    return (
        <>
            <ConfirmModalWrapper>
                <ModalTitle>Сonfirm</ModalTitle>
                <ModalMessage>{ message }</ModalMessage>
                <Timer>{`The window will close in ${ 10 - time }s`}</Timer>
                <ModalActions>
                    <Button onClick={cancelClick}>Cancel</Button>
                    <Button onClick={confirmClick} isReverse={true}>Confirm</Button>
                </ModalActions>
            </ConfirmModalWrapper>
        </>
    );
}

export default ConfirmModal;
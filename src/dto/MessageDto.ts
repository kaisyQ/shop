import { MessageStatus } from "types/types";


export class MessageDto {
    private _status: MessageStatus;
    private _message: string;
    constructor (status: MessageStatus, message: string) {
        this._message = message;
        this._status = status;
    }
    public get status() {
        return this._status;
    }
    public get message() {
        return this._message;
    }
}
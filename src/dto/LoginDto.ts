export class LoginDto {
    private _email: string;
    private _password: string;

    constructor(email: string, password: string) {
        this._email = email;
        this._password = password;
    }

    public get email() {
        return this._email;
    }

    public get password() {
        return this._password;
    }
}
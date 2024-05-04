export class RegisterDto {
    private _username: string;
    private _password: string;
    private _email: string;

    constructor(username: string, password: string, email: string) {
        this._username = username;
        this._password = password;
        this._email = email;
    }

    public get username() {
        return this._username;
    }

    public get password() {
        return this._password;
    }

    public get email() {
        return this._email;
    }
}
export class RegisterDto {
    private _username: string;
    private _password: string;
    private _email: string;
    private _code: string|null;

    constructor(username: string, password: string, email: string, code: string|null = null) {
        this._username = username;
        this._password = password;
        this._email = email;
        this._code = code;
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
    public get code() {
        return this._code;
    }
}
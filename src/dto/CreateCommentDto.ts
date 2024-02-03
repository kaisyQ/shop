export class CreateCommentDto {
    
    private _stars: number = 0;
    private _username: string = '';
    private _text: string = '';

    constructor(stars: number, username: string, text: string) {
        this._stars =stars;
        this._username = username;
        this._text = text;
    
    }

    public set stars (stars: number) {
        this._stars = stars;
    }

    public set username (username: string) {
        this._username = username;
    }

    public set text (text: string) {
        this._text = text;
    }

    public get stars (): number {
        return this._stars;
    }

    public get username (): string {
        return this._username;
    }
    
    public get text (): string {
        return this._text;
    }
}

import { Expose, Type } from "class-transformer";
import type { RatingScore } from "types/types";

export class Comment {
    
    @Expose({ name: 'id' }) private _id: number = 0;
    
    @Expose({ name: 'username' }) private _author: string = '';
    
    @Expose({ name: 'text' }) private _text: string = '';
    
    @Expose({ name: 'stars' }) private _rating: RatingScore = 1;
    
    @Type(() => Date) @Expose({ name: 'createdAt' }) private _date: Date = new Date();



    public get date(): Date {
        return this._date;
    }

    public set date(value: Date) {
        this._date = value;
    }

    public get rating(): RatingScore {
        return this._rating;
    }

    public set rating(value: RatingScore) {
        this._rating = value;
    }

    public get text(): string {
        return this._text;
    }

    public set text(value: string) {
        this._text = value;
    }

    public get author(): string {
        return this._author;
    }

    public set author(value: string) {
        this._author = value;
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }
}
import { Expose } from 'class-transformer';

export class Product {

    @Expose({ name: 'id' }) private _id: number = 0;
    
    @Expose({ name: 'name' }) private _name: string = '';
    
    @Expose({ name: 'slug' }) private _slug: string = '';
    
    @Expose({ name: 'delivery' }) private _delivery: string = '';
    
    @Expose({ name: 'description' }) private _description: string = '';
    
    @Expose({ name: 'count' }) private _count: number = 0;
    
    @Expose({ name: 'price' }) private _price: number = 0;
    
    @Expose({ name: 'discountPrice' }) private _discountPrice: number = 0;
    
    @Expose({ name: 'createdAt' }) private _createdAt: Date = new Date();
    
    @Expose({ name: 'images' }) private _imagesSrc: Array<string> = [];
    
    @Expose({ name: 'bestseller' }) private _topOfTheWeek: boolean = false;
    
    @Expose({ name: 'height' }) private _height: string = '';
    
    @Expose({ name: 'width' }) private _width: string = '';

    @Expose({ name: 'depth' }) private _depth: string = '';
    
    public get width(): string {
        return this._width;
    }

    public set width(value: string) {
        this._width = value;
    }

    public get depth(): string {
        return this._depth;
    }

    public set depth(value: string) {
        this._depth = value;
    }


    public get height(): string {
        return this._height;
    }

    public set height(value: string) {
        this._height = value;
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get slug(): string {
        return this._slug;
    }

    public set slug(value: string) {
        this._slug = value;
    }

    public get delivery(): string {
        return this._delivery;
    }

    public set delivery(value: string) {
        this._delivery = value;
    }

    public get description(): string {
        return this._description;
    }

    public set description(value: string) {
        this._description = value;
    }

    public get discountPrice(): number {
        return this._discountPrice;
    }

    public set discountPrice(value: number) {
        this._discountPrice = value;
    }

    public get createdAt(): Date {
        return this._createdAt;
    }

    public set createdAt(value: Date) {
        this._createdAt = value;
    }

    public get imagesSrc(): Array<string> {
        return this._imagesSrc;
    }

    public set imagesSrc(value: Array<string>) {
        this._imagesSrc = value;
    }

    public get topOfTheWeek(): boolean {
        return this._topOfTheWeek;
    }

    public set topOfTheWeek(value: boolean) {
        this._topOfTheWeek = value;
    }

    public get price(): number {
        return this._price;
    }

    public set price(value: number) {
        this._price = value;
    }

    public get count(): number {
        return this._count;
    }

    public set count(value: number) {
        this._count = value;
    }

}
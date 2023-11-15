import { Expose } from "class-transformer";
import { API_URL } from "constants/constants";

export class Bestseller {

    @Expose({ name: 'id' }) private _id: number = 0;

    @Expose({ name: 'images' }) private _imagesSrc: string[] = [];

    @Expose({ name: 'slug' }) private _slug: string = '';

    @Expose({ name: 'name' }) private _name: string = '';

    @Expose({ name: 'price' }) private _price: number = 0;

    @Expose({ name: 'discountPrice' }) private _discountPrice: number = 0;

    public get discountPrice(): number {
        return this._discountPrice;
    }

    public set discountPrice(value: number) {
        this._discountPrice = value;
    }

    public get price(): number {
        return this._price;
    }

    public set price(value: number) {
        this._price = value;
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

    public get imagesSrc(): string[] {
        return this._imagesSrc.map(image => `${API_URL}${image}`);
    }

    public set imagesSrc(value: string[]) {
        this._imagesSrc = value;
    }

    public get id(): number {
        return this._id;
    }

    public set id(value: number) {
        this._id = value;
    }

    public getCurrentPriceWithVal (): string {
        return this._discountPrice ? `$${this.discountPrice}(CAD)` : `$${this._price}(CAD)`
    }
}
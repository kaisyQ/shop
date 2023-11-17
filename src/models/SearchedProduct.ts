import { Expose } from "class-transformer";

export class SearchedProduct {
    
    @Expose({ name: 'id' }) private _id: number = 0;
    
    @Expose({ name: 'name' }) private _name: string = '';
    
    @Expose({ name: 'slug' }) private _slug: string = '';
    
    @Expose({ name: 'image' }) private _image: string = '';
    
    public get image(): string {
        return this._image;
    }

    public set image(value: string) {
        this._image = value;
    }
    
    public get slug(): string {
        return this._slug;
    }

    public set slug(value: string) {
        this._slug = value;
    }
    
    public get name(): string {
        return this._name;
    }

    public set name(value: string) {
        this._name = value;
    }

    public get id(): number {
        return this._id;
    }
    
    public set id(value: number) {
        this._id = value;
    }
    
}
export class Produit

{
    private _title:string; 
    private _desc:string;
    private _img:string;
    private _prix:number; 
    private _id: number;
    private _ep:boolean;
    private _date:Date;

    constructor(title:string,desc:string,img:string,prix:number,id: number,ep:boolean,date:Date ){
        this._title=title; 
        this._desc=desc;
        this._img=img;
        this._prix=prix; 
        this._id=id;
        this._ep=ep;
        this._date=date;
    }   
    

  this: any;
    //titre
    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }
    //desc
    public get desc(): string {
        return this._desc;
    }
    public set desc(value: string) {
        this._desc = value;
    }
    
    //prix
    public get prix(): number {
        return this._prix;
    }
    public set prix(value: number) {
        this._prix = value;
    }
    //id
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    //img
    public get img(): string {
        return this._img;
    }
    public set img(value: string) {
        this._img = value;
    }

    //stock-ep
    public get ep(): boolean {
        return this._ep;
    }
    public set ep(value: boolean) {
        this._ep = value;
    }
    //date
    public get date(): Date {
        return this._date;
    }
    public set date(value: Date) {
        this._date = value;
    }

    
    
}
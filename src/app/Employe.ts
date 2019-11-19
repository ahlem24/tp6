export class Employe{
   
    constructor(private _matricule: number,private _nom: string,private _fonction: string,private _expert: boolean){
    }
       
    public get nom(): string {
        return this._nom;
    }
    public set nom(value: string) {
        this._nom = value;
    }
    public get matricule(): number {
        return this._matricule;
    }
    public set matricule(value: number) {
        this._matricule = value;
    }
    public get fonction(): string {
        return this._fonction;
    }
    public set fonction(value: string) {
        this._fonction = value;
    }
    public get expert(): boolean {
        return this._expert;
    }
    public set expert(value: boolean) {
        this._expert = value;
    }

    }

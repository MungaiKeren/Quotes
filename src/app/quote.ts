export class Quote {
    seeDetails: boolean;
    constructor(public id:number, public name:string, public author:string,public personSubmitted:string){
        this.seeDetails = false;
    }
    
}
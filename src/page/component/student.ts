export class Student {
    sid:number
    firstName:string
    lastName:string
    address:string
    book:string
    college:string

    constructor(sid:number,firstNane:string,
        lastName:string,
        address:string,
        book:string,
        college:string){
        this.firstName=firstNane;
        this.lastName=lastName;
        this.address=address;
        this.book=book;
        this.college=college;
        this.sid=sid;
    }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLogin:boolean=false;
  empEmail:string;
  empId:string;
  graphDates:string[]=[];
  graphExpense:number[]=[];
  graphCollection:number[]=[];
  constructor() { }
}

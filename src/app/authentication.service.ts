import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private session= true;
  private id:number|0=0;
  constructor() { }

  login(id:number)
  {
    this.session=true;
    this.id=id;
  }
  logout()
  {
    this.session=false;
    this.id=0;
  }
  islogin():boolean
  {
    return this.session;
  }
  cust():number
  {
    return this.id;
  }



}

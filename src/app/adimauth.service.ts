import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdimauthService {

  private session= true;
  constructor() { }

  login()
  {
    this.session=true;
  }
    
  logout()
  {
    this.session=false;
    
  }
  islogin():boolean
  {
    return this.session;
  }
 
}
  


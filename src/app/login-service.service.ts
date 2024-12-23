import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private httpClient:HttpClient) { }
  login(custId:number,password:string):Observable<any>
  {
    
      return this.httpClient.post(`http://localhost:8002/login?custId=${custId}&password=${password}`,{responseType:'boolean'});
  }
}

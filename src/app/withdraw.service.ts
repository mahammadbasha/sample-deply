import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WithdrawService {


  constructor(private httpClient:HttpClient) { }
  withdraw(accId:number,amount:number):Observable<any>
  {
    
    return this.httpClient.post(`http://localhost:8000/withdraw?accId=${accId}&amount=${amount}`,{responseType:'boolean',});
  }
}

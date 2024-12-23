import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TransactionStatus } from './model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepositService {
 

    constructor(private httpClient:HttpClient) { }
    depositMoney(accId:number,amount:number):Observable<any>
  {
    console.log( this.httpClient.post(`http://localhost:8000/deposit?accId=${accId}&amount=${amount}`,{responseType:'boolean'}));
      return this.httpClient.post(`http://localhost:8000/deposit?accId=${accId}&amount=${amount}`,{responseType:'boolean'});
  }
  
  }


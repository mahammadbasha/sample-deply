import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  constructor(private httpClient:HttpClient) { }
  balance(accid:number):Observable<any>
{
  
    return this.httpClient.get(`http://localhost:8001/getAccount/${accid}`);
}
}

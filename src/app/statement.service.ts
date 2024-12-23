import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatementService {

  constructor(private httpClient:HttpClient) { }
  transferMoney(accId:number):Observable<any>
{
  
    return this.httpClient.get(`http://localhost:8000/getStatement/${accId}`);
}
}

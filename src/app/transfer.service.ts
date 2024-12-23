import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  
  constructor(private httpClient:HttpClient) { }
  transferMoney(faccId:number,taccId:number,amount:number):Observable<any>
{
  
    return this.httpClient.post(`http://localhost:8000/transfer?faccId=${faccId}&taccId=${taccId}&amount=${amount}`,{responseType:'boolean',});
}

}

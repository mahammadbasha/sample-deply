import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Customer } from './BankEmployee/create-customer/Customer.model';

@Injectable({
  providedIn: 'root'
})
export class CreatecustomerService {

  constructor(private httpclient:HttpClient) { }
  createCustomer(customer:Customer):Observable<number>
  {
    return this.httpclient.post<number>(`http://localhost:8003/createCustomer`,customer);
  }
}

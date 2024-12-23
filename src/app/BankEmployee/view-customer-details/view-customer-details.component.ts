import { Component } from '@angular/core';
import { Customer } from '../create-customer/Customer.model';
import { HttpClient } from '@angular/common/http';
import { AdimauthService } from 'src/app/adimauth.service';


@Component({
  selector: 'app-view-customer-details',
  templateUrl: './view-customer-details.component.html',
  styleUrls: ['./view-customer-details.component.css']
})
export class ViewCustomerDetailsComponent {
  custId!: number;
  customer: Customer = new Customer();// Initialize an empty customer object
  accounts: Account[]=[] ;
  showDetails: boolean = false;
  

  constructor(private http:HttpClient,private admin:AdimauthService){}
  viewCustomer() {
    
    if(this.admin.islogin()){
    this.http.get<any>(`http://localhost:8001/getCustomerAccounts/${this.custId}`).subscribe((response)=>{this.accounts=response;
  console.log(response)});
           this.http.get<Customer>(`http://localhost:8003/getCustomerDetails/${this.custId}`).subscribe((response)=>{
            console.log(response);
            this.customer=response;
          if(this.customer==null)
        {
          this.showDetails = false;
          alert("NOT RECORDS FOUND !!")
        }
      else 
      this.showDetails = true;}); 
  }
  else
  {
    alert("PLEASE LOGIN !!")
  }
}
}
interface Account{

     accId:number;
     accType:string;
	   amount:number;
}
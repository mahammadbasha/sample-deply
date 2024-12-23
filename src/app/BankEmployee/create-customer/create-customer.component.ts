import { Component } from '@angular/core';
import { Customer } from './Customer.model';
import { CreatecustomerService } from 'src/app/createcustomer.service';
import { AdimauthService } from 'src/app/adimauth.service';



@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent {
  
   message!:string;
   id!:number;
  customer: Customer = new Customer(); // Initialize an empty customer object.
constructor(private create:CreatecustomerService,private admin:AdimauthService){}
  createCustomer() {

    if(this.admin.islogin()){
    this.create.createCustomer(this.customer).subscribe((response)=>{this.id =response
      console.log(this.id)
    alert("CUSTOMER CREATED SUCCESSFULLY !! \n"+"CUSTOMER ID is "+this.id)
    
    })
  // Handle the customer creation logic here.
    // You can send the customer data to a service or API for processing.
    // For this example, you can simply log the customer data to the console.

  }
  else
  {
    alert("PLEASE LOGIN !!")
  }
}
}
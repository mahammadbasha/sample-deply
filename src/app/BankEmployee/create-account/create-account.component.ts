import { Component } from '@angular/core';
import { CreatecustomerService } from 'src/app/createcustomer.service';
import { Account } from './Account.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AdimauthService } from 'src/app/adimauth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  account:Account = new Account();
  id!:number;

constructor(private http:HttpClient,private admin:AdimauthService,private route:Router){}
  createAccount() {

   
    if(this.admin.islogin()){
        
      if(this.account.amount<1000){
      alert("Min balance should be Rs.1000");
      }
      else{

           this.http.get(`http://localhost:8003/find/${this.account.custId}`).subscribe((response)=>{
            if(response==true){
            this.http.post(`http://localhost:8001/createAccount`,this.account).subscribe((response)=>{
              alert ("ACCOUNT CREATED SUCCESSFULLY !! \n YOUR ACCOUNT ID IS "+response)})
            }
              else
              {
              alert("NO CUSTOMER ID IS FOUND !!");
              }
           })
          
           
          }
        }
          else
          {
            alert("PLEASE LOGIN !!")
          }
  }
 
}

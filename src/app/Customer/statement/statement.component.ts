import { HttpClient } from '@angular/common/http';
import { Statement } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';
import { StatementService } from 'src/app/statement.service';

@Component({
  selector: 'app-statement',
  templateUrl: './statement.component.html',
  styleUrls: ['./statement.component.css']
})
export class StatementComponent {
  accId!: number;
  transactionStatement: Transaction[] = []; // Transaction[] is a custom type, you can create it.
message!:string;
valid!:boolean;
  constructor(private httpclient:HttpClient,private statment:StatementService,private auth:AuthenticationService,private route:Router){}

  logout()
  {
   
    this.route.navigate(["/"])
      this.auth.logout();
      

  }
  viewStatement() {
   if(this.auth.islogin()){

    this.httpclient.get<boolean>(`http://localhost:8001/check/${this.auth.cust()}/${this.accId}`).subscribe((response)=>{
      this.valid=response;

   if(this.valid)
   {
    this.statment.transferMoney(this.accId).subscribe((response)=>{this.transactionStatement=response
      if(this.transactionStatement.length==0)
         alert("NO TRANSACTION FOUND !!");
    })
   }
   else{
    alert("CHECK YOUR ACCOUNT NO !!")
   }})

   
  }
  else
{
  alert("PLEASE LOGIN !!")
}
}

}

interface Transaction {
  transType:string;
  amount:number;
}

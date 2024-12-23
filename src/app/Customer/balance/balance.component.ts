import { Component } from '@angular/core';
import { Account } from './Account.model';
import { HttpClient } from '@angular/common/http';
import { BalanceService } from 'src/app/balance.service';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent {
  

  accid!: number;
  acc:Account = new Account();
  valid!:boolean;
  
  constructor(private httpclient:HttpClient,private balanceservice:BalanceService,private auth:AuthenticationService){}

  viewBalance()  {
   
    if(this.auth.islogin()){

    
       this.httpclient.get<boolean>(`http://localhost:8001/check/${this.auth.cust()}/${this.accid}`).subscribe((response)=>{
        this.valid=response;

      if( this.valid)
      {
        this.balanceservice.balance(this.accid).subscribe((response)=>{this.acc=response})
      }
      else
      {
          alert("CHECK YOUR ACCOUNT NO !!")
      }
       })
       

    }
    else
    {
       alert("PLEASE LOGIN !!");
    }
  }
}



  

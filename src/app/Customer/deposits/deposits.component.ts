import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';
import { DepositService } from 'src/app/deposit.service';
  
@Component({
  selector: 'app-deposits',
  templateUrl: './deposits.component.html',
  styleUrls: ['./deposits.component.css']
})
export class DepositsComponent {
  accId!: number;
  amount!: number;
  message!:boolean;

  constructor(private route:Router,private depositservice:DepositService,private router:Router,private auth:AuthenticationService){}
  logout()
  {
   
    this.route.navigate(["/"])
      this.auth.logout();
      

  }
  depositMoney() {
   
if(this.auth.islogin()){
    this.depositservice.depositMoney(this.accId,this.amount).subscribe((response)=>{
      
      this.message=response;
      
      if(this.message){
        alert(`Successfully deposited $${this.amount} into Account ID ${this.accId}.`);
      }
   else 
     alert('check your Account number / Amount');
    }
    )
  }
  else
  {
    alert("PLEASE LOGIN !!")
  }

    
  
    }
  }
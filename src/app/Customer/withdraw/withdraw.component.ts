import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';
import { WithdrawService } from 'src/app/withdraw.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent {

  accId!: number;
  amount!: number;
  message!:boolean;
  validid!: boolean;

  constructor(private withdrawservice:WithdrawService,private router:Router,private auth:AuthenticationService,private http:HttpClient){}
  logout()
  {
   
    this.router.navigate(["/"])
      this.auth.logout();
      

  }
  withdrawMoney() {
   
if(this.auth.islogin()){
 

  this.http.get<boolean>(`http://localhost:8001/check/${this.auth.cust()}/${this.accId}`).subscribe((response)=>{
    this.validid=response;

    if(this.validid){
      this.withdrawservice.withdraw(this.accId,this.amount).subscribe((response)=>{this.message=response
      
        if(this.message)
        {
          alert(`Successfully withdrawn $${this.amount} from Account ID ${this.accId}.`);
        }
     else
        alert(`check you account no / amount/ check min balance`);})
  
    }
    else
    {
      alert("CHECK YOUR ACCOUNT NO !!")
    }
    
  })

 

  }
  else
  {
    alert("PLEASE LOGIN !!")
  }
}
 
}
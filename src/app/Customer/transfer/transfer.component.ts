import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';
import { TransferService } from 'src/app/transfer.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})
export class TransferComponent {
  faccId!: number;
  taccId!: number;
  amount!: number;
  message!:boolean;
  validid!: boolean;
constructor(private transferservice:TransferService,private auth:AuthenticationService,private http:HttpClient,private route:Router){}
logout()
  {
   
    this.route.navigate(["/"])
      this.auth.logout();
      

  }
  transferMoney() {
   if(this.auth.islogin()){

    this.http.get<boolean>(`http://localhost:8001/check/${this.auth.cust()}/${this.faccId}`).subscribe((response)=>
    {this.validid=response
      
      if(this.validid)
      {
        this.transferservice.transferMoney(this.faccId,this.taccId,this.amount).subscribe((response)=>{
          this.message=response
          if(this.message){
            alert(`Successfully Transfered $${this.amount} from Account Id ${this.faccId} to Account ID ${this.taccId}.`);
       }
       else
          alert(` Account ID NOT FOUND / check you amount.`);
          })
         

      }
      else
      {
        alert("CHECK YOUR ACCOUNT NO")
      }
    
    
    
    })

    
  
  }
  else
  {
    alert("Please LogIn !!")
  }
}
}
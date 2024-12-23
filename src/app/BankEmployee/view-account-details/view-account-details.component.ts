import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Account } from '../create-account/Account.model';
import { AdimauthService } from 'src/app/adimauth.service';

@Component({
  selector: 'app-view-account-details',
  templateUrl: './view-account-details.component.html',
  styleUrls: ['./view-account-details.component.css']
})
export class ViewAccountDetailsComponent {
  accId!: number;
  account: Account=new Account() ; // Initialize an empty account object
  showDetails: boolean = false;
  constructor(private http:HttpClient,private admin:AdimauthService){}
  viewAccount() {
    if(this.admin.islogin()){
    this.http.get<Account>(`http://localhost:8001/getAccount/${this.accId}`).subscribe((response)=>{this.account=response
   
  if(response!=null)
     this.showDetails = true;
  else  {
     this.showDetails = false;
     alert("NO ACCOUNT FOUND")
  }

  })
}
else
{
  alert("PLEASE LOGIN !!")
}
  }
}

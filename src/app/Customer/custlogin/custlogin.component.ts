 import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
 import { AuthServiceService } from 'src/app/auth-service.service';
import { AuthenticationService } from 'src/app/authentication.service';
import { LoginServiceService } from 'src/app/login-service.service';

@Component({
  selector: 'app-custlogin',
  templateUrl: './custlogin.component.html',
  styleUrls: ['./custlogin.component.css'],
 })
export class CustloginComponent  {
  custId!:number;
  password:string='';
  message:boolean=false;
  
  
  constructor(private loginservices: LoginServiceService,private router:Router,private authentication:AuthenticationService) {}

  login()
  {
    
    this.loginservices.login(this.custId,this.password).subscribe((response)=>{
      this.message=response;
      console.log(this.message);
  if(this.message)
  {
    this.authentication.login(this.custId);
    if(this.authentication.islogin() && this.authentication.cust() == this.custId)
         this.router.navigate(["/custhomepage"])
  }
  else{
    alert("Login failed");
  }

      
    }
    )
  }
}
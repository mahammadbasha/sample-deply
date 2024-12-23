import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AdimauthService } from 'src/app/adimauth.service';

@Component({
  selector: 'app-emplogin',
  templateUrl: './emplogin.component.html',
  styleUrls: ['./emplogin.component.css']
})
export class EmploginComponent {

  empId!:string;
  password!:string;
  constructor(private router:Router ,private admin:AdimauthService){}
  login()
  {
    
    if(this.empId=="EMP123" && this.password=="EMP123")
    {
         this.admin.login();
         this.router.navigate(["/emphomepage"]);
    }
       
    else
      alert("Check your credentials");
      
  }


}

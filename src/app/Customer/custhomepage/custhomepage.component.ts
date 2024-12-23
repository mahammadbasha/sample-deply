import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication.service';

@Component({
  selector: 'app-custhomepage',
  templateUrl: './custhomepage.component.html',
  styleUrls: ['./custhomepage.component.css']
})
export class CusthomepageComponent {
  constructor(private auth:AuthenticationService,private route:Router){}
  logout()
  {
   
    this.route.navigate(["/"])
      this.auth.logout();
      

  }

}

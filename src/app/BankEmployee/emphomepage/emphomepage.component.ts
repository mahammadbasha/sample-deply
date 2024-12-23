import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdimauthService } from 'src/app/adimauth.service';

@Component({
  selector: 'app-emphomepage',
  templateUrl: './emphomepage.component.html',
  styleUrls: ['./emphomepage.component.css']
})
export class EmphomepageComponent {

  constructor(private route:Router,private auth:AdimauthService){}
  logout()
  {
   
    this.route.navigate(["/bankemployee-login"])
    this.auth.logout();
      

  }

}

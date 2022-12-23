import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/Services/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private userauthServices:UserAuthService,private router:Router) { }

  ngOnInit(): void {
  }

 public isLoggedIn(){
  return  this.userauthServices.isLoggedIn();
 }

 public logout(){
   this.userauthServices.clear();
   this.router.navigate(['/login']);
 }



}

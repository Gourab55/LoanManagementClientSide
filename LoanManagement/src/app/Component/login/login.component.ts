import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/User';
import { UserAuthService } from 'src/app/Services/user-auth.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User= new User();

  email:String;
  password:String;

  constructor(private userService:UserService,
    private userauthService:UserAuthService,
    private router: Router
    ) { }

  ngOnInit(): void {

  }
  onSubmit(){
    this.userlogin();

  }
  userlogin(){
    this.userService.loginUser(this.user.email,this.user.password).subscribe(data =>{
        alert("Log in SuccessFul");
        this.gotoUserSearch();
        console.log(data);
          
         },
      error => {
        alert("Please enter valid email and password")
      console.log(error)
      
       });

  } 
  gotoUserSearch(){
    this.router.navigate(['/admin']);
  }

  }



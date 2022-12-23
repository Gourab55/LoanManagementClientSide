import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/Model/User';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {

  user: User= new User();


  constructor(private userService:UserService, private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.Saveuser();
    

  }
  Saveuser()
  {
    this.userService.createUser(this.user).subscribe(data =>{
     alert("Registration successful");
    this.gotoLogInPage();
      
    },
     error => console.log(error));
  }

  gotoLogInPage(){
    this.router.navigate(['/login'])
  }

}

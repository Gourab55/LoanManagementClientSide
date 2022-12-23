import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginComponent } from '../Component/login/login.component';
import { User } from '../Model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  constructor(private http:HttpClient) { }

  private Base_Url5="http://ec2-34-226-152-252.compute-1.amazonaws.com:8081/api/v1/login"
  private Base_Url1="http://ec2-34-226-152-252.compute-1.amazonaws.com:8081/api/v1/register";

  createUser(users:User):Observable<object>{

    return this.http.post(`${this.Base_Url1}`,users);
  
   }

   loginUser(email: String,password: String):Observable<User[]>  {
    console.log(`${this.Base_Url5}/?email=${email}&password=${password}`);
    return this.http.get<User[]>(`${this.Base_Url5}/?email=${email}&password=${password}`)

   }



}



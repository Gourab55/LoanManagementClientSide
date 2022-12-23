import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Loan } from '../Model/Loan';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

private Base_Url="http://ec2-34-226-152-252.compute-1.amazonaws.com:8081/api/v1/getAllLoan";
private Base_Url1="http://ec2-34-226-152-252.compute-1.amazonaws.com:8081/api/v1/createLoan";
private Base_Url2="http://ec2-34-226-152-252.compute-1.amazonaws.com:8081/api/v1/loan";

private Base_Url3="http://ec2-34-226-152-252.compute-1.amazonaws.com:8081/api/v1/updateLoan";
private Base_Url4="http://ec2-34-226-152-252.compute-1.amazonaws.com:8081/api/v1/remove";
private Base_Url5="http://ec2-34-226-152-252.compute-1.amazonaws.com:8081/api/v1/searchLoan";

getLoanList():Observable<Loan[]>{  

  return this.http.get<Loan[]>(`${this.Base_Url}`);
}

  createLoan(loans:Loan):Observable<object>{

    return this.http.post(`${this.Base_Url1}`,loans);
  
   }

   getLoanById(id: number):Observable<Loan>{

    return this.http.get<Loan>(`${this.Base_Url2}/${id}`);
 
  }
  getLoanBySearch(fastname: String,lastname: String,loanno: number):Observable<Loan[]>{
   
    let loanNo=loanno;
    http://localhost:8081/api/v1/searchLoan?fastname=&lastname=&loanNo=456789
    console.log(`${this.Base_Url5}?fastname=${fastname}&lastname=${lastname}&loanNo=${loanno}`);
     return this.http.get<Loan[]>(`${this.Base_Url5}?fastname=${fastname}&lastname=${lastname}&loanNo=${loanno}`)
  }


 updateLoan(id: number,loan:Loan):Observable<object>{
   return this.http.put(`${this.Base_Url3}/${id}`,loan);
 }

 deleteLoan(id : number):Observable<object>{
   return this.http.delete(`${this.Base_Url4}/${id}`);
 }




  constructor(private http:HttpClient) { }
}

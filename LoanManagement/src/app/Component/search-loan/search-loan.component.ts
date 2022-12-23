import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoanService } from 'src/app/Loan_Service/loan.service';
import { Loan } from 'src/app/Model/Loan';

@Component({
  selector: 'app-search-loan',
  templateUrl: './search-loan.component.html',
  styleUrls: ['./search-loan.component.css']
})
export class SearchLoanComponent implements OnInit {

 firstname:String;
 lastname:String;
 loanno:number=0;




  loan:Loan= new Loan();
  loans:Loan[]=[];

  constructor(private loanService:LoanService,private router:Router) { }

  ngOnInit(): void {
  }
  searchLoan()
  {
    this.loanService.getLoanBySearch(this.loan.firstname,this.loan.lastname,this.loan.loanno).subscribe(data =>{
      console.log(data);
      this.loans=data;
      // this.gotoBookList();
    },
     error => console.log(error));
  }

 


  onSubmit(){
  this.searchLoan();
  }

}

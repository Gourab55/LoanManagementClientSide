import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoanService } from 'src/app/Loan_Service/loan.service';
import { Loan } from 'src/app/Model/Loan';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.css']
})
export class LoanListComponent implements OnInit {

  loans: Loan[] = [];
  constructor(private loanService: LoanService,private router: Router) { }

  ngOnInit(): void {
    this.getLoans();
  }
  private getLoans(){
   
    this.loanService.getLoanList().subscribe(data => {
      this.loans=data;
    });

}
updateLoan(id:number){
  this.router.navigate(['update-loan', id])

}
deleteLoan(id:number){

  this.loanService.deleteLoan(id).subscribe(data =>{
    console.log(data);
    this.getLoans();
  })

 }
}

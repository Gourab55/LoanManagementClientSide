import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoanService } from 'src/app/Loan_Service/loan.service';
import { Loan } from 'src/app/Model/Loan';

@Component({
  selector: 'app-update-loan',
  templateUrl: './update-loan.component.html',
  styleUrls: ['./update-loan.component.css']
})
export class UpdateLoanComponent implements OnInit {

id:number;
loan: Loan= new Loan();

  constructor(private loanService:LoanService,private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params[`id`];
    this.loanService.getLoanById(this.id).subscribe(data =>{
      this.loan=data;
    }, error =>console.log(error));
  }
  
  onSubmit(){
    this.loanService.updateLoan(this.id,this.loan).subscribe(  data  =>{
      this.gotoLoanList();
        },error => console.log(error));
   
  }
  gotoLoanList(){
    this.router.navigate(['/getloans'])
  }




}

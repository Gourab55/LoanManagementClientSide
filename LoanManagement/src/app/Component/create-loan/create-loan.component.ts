import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoanService } from 'src/app/Loan_Service/loan.service';
import { Loan } from 'src/app/Model/Loan';

@Component({
  selector: 'app-create-loan',
  templateUrl: './create-loan.component.html',
  styleUrls: ['./create-loan.component.css']
})
export class CreateLoanComponent implements OnInit {

  loan: Loan = new Loan();

  constructor(private loanService: LoanService, private router: Router) { }

  ngOnInit(): void {

  }
 
   registerForm= new FormGroup({

     fastname: new FormControl("",[Validators.required, Validators.minLength(2),Validators.pattern("[a-zA-z].*")]),
     lastname: new FormControl("",[Validators.required, Validators.minLength(2),Validators.pattern("[a-zA-z].*") ]),
     loanNo: new FormControl("",[Validators.required ,Validators.pattern("[0-9].*"), Validators.minLength(6),Validators.maxLength(6)]),
     property_add: new FormControl("",[Validators.required, Validators.minLength(5),Validators.pattern("[a-zA-z].*") ]),
     loan_amount: new FormControl("",[Validators.required, Validators.pattern("[1-9].*") ,Validators.minLength(5),Validators.maxLength(6)]), 
     loan_type: new FormControl("",[Validators.required , Validators.pattern("[a-zA-Z].*")]),
     loan_term: new FormControl("",[Validators.required, Validators.pattern("[1-9].*") ,Validators.minLength(1),Validators.maxLength(1)] )

   });
 




  saveLoan() {
    this.loanService.createLoan(this.loan).subscribe(data => {
      alert("Loan data saved successfully");
      console.log(data);
      this.gotoLoanList();
    },
      error => console.log(error));
  }
  gotoLoanList() {
    this.router.navigate(['/getloans'])
  }


  onSubmit() {
    
    this.saveLoan();
    console.log(this.registerForm.get("fastname"));
    console.log(this.loan);

  }

  get FastName() :FormControl{
    return this.registerForm.get("fastname") as FormControl;
  }
  get LastName() :FormControl{
    return this.registerForm.get("lastname") as FormControl;
  }
  get LoanNo() :FormControl{
    return this.registerForm.get("loanNo") as FormControl;
  }

  get PropertyAdd() :FormControl{
    return this.registerForm.get("property_add") as FormControl;
  }
  get LoanAmount() :FormControl{
    return this.registerForm.get("loan_amount") as FormControl;
  }

  get LoanType() :FormControl{
    return this.registerForm.get("loan_type") as FormControl;
  }

  get LoanTerm() :FormControl{
    return this.registerForm.get("loan_term") as FormControl;
  }







}

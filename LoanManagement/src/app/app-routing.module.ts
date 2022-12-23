import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './Component/admin/admin.component';
import { CreateLoanComponent } from './Component/create-loan/create-loan.component';
import { ForbiddenComponent } from './Component/forbidden/forbidden.component';
import { HomeComponent } from './Component/home/home.component';
import { LoanListComponent } from './Component/loan-list/loan-list.component';
import { LoginComponent } from './Component/login/login.component';
import { SearchLoanComponent } from './Component/search-loan/search-loan.component';
import { UpdateLoanComponent } from './Component/update-loan/update-loan.component';
import { UserSignUpComponent } from './Component/user-sign-up/user-sign-up.component';
import { UserComponent } from './Component/user/user.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"user",component:UserComponent},
  // {path:"admin",component:AdminComponent , canActivate:[AuthGuard],data:{roles:['Admin']} },
   {path:"login",component:LoginComponent },
  {path:"forbidden",component:ForbiddenComponent},
  {path:"create",component:CreateLoanComponent},
  {path:"getloans",component:LoanListComponent},
  {path:"update-loan/:id",component:UpdateLoanComponent},
  {path:"search",component:SearchLoanComponent},
  {path:"signup", component:UserSignUpComponent},
  {path:"admin",component:AdminComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

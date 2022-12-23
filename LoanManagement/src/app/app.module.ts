import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Component/home/home.component';
import { AdminComponent } from './Component/admin/admin.component';
import { UserComponent } from './Component/user/user.component';
import { LoginComponent } from './Component/login/login.component';
import { HeaderComponent } from './Component/header/header.component';
import { ForbiddenComponent } from './Component/forbidden/forbidden.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { RouterModule } from '@angular/router';
// import { AuthGuard } from './Auth/auth.guard';
// import { AuthInterceptor } from './Auth/auth.interceptor';
import { UserService } from './Services/user.service';
import { CreateLoanComponent } from './Component/create-loan/create-loan.component';
import { LoanListComponent } from './Component/loan-list/loan-list.component';
import { UpdateLoanComponent } from './Component/update-loan/update-loan.component';
import { SearchLoanComponent } from './Component/search-loan/search-loan.component';
import { UserSignUpComponent } from './Component/user-sign-up/user-sign-up.component';
import { NavbarComponent } from './Component/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    LoginComponent,
    HeaderComponent,
    ForbiddenComponent,
    CreateLoanComponent,
    LoanListComponent,
    UpdateLoanComponent,
    SearchLoanComponent,
    UserSignUpComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ],
  providers: [
    // AuthGuard,
    // {
    //   provide:HTTP_INTERCEPTORS,
    //   useClass:AuthInterceptor,
    //   multi:true
    // },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

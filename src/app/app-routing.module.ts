import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AddressComponent } from './address/address.component';
import { AuthenticationGuard } from './login/authentication.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';
import { PrivatepolicyComponent } from './privatepolicy/privatepolicy.component';
import { ReturnsComponent } from './returns/returns.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard/:name', canActivate: [AuthenticationGuard], component: DashboardComponent },
  // { path: 'dashboard/:name', component: DashboardComponent },

  { path: 'signup', component: SignupComponent },
  { path: 'address', component: AddressComponent },
  { path: 'termsandconditions', component: TermsandconditionsComponent },
  { path: 'privatepolicy', component: PrivatepolicyComponent },
  { path: 'returns', component: ReturnsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
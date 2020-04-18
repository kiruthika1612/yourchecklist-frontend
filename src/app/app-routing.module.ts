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
import { TrolleysComponent } from './products/trolleys/trolleys.component';
import { TrolleyOneComponent } from './products/trolleys/trolley-one/trolley-one.component';
import { TrolleyTwoComponent } from './products/trolleys/trolley-two/trolley-two.component';
import { TrolleyThreeComponent } from './products/trolleys/trolley-three/trolley-three.component';
import { BagsComponent } from './products/bags/bags.component';
import { BagOneComponent } from './products/bags/bag-one/bag-one.component';
import { BagTwoComponent } from './products/bags/bag-two/bag-two.component';
import { BagThreeComponent } from './products/bags/bag-three/bag-three.component';
import { AccessoriesComponent } from './products/accessories/accessories.component';
import { AccessoryOneComponent } from './products/accessories/accessory-one/accessory-one.component';
import { AccessoryTwoComponent } from './products/accessories/accessory-two/accessory-two.component';
import { AccessoryThreeComponent } from './products/accessories/accessory-three/accessory-three.component';
import { CosmeticsComponent } from './products/cosmetics/cosmetics.component';
import { CosmeticOneComponent } from './products/cosmetics/cosmetic-one/cosmetic-one.component';
import { CosmeticTwoComponent } from './products/cosmetics/cosmetic-two/cosmetic-two.component';
import { CosmeticThreeComponent } from './products/cosmetics/cosmetic-three/cosmetic-three.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard/:name', canActivate: [AuthenticationGuard], component: DashboardComponent },
  { path: 'signup', component: SignupComponent },

  { path: 'trolleys', component: TrolleysComponent },
  { path: 'trolleyone', component: TrolleyOneComponent },
  { path: 'trolleytwo', component: TrolleyTwoComponent },
  { path: 'trolleythree', component: TrolleyThreeComponent },

  { path: 'bags', component: BagsComponent },
  { path: 'bagone', component: BagOneComponent },
  { path: 'bagtwo', component: BagTwoComponent },
  { path: 'bagthree', component: BagThreeComponent },

  { path: 'accessories', component: AccessoriesComponent },
  { path: 'accessoryone', component: AccessoryOneComponent },
  { path: 'accessorytwo', component: AccessoryTwoComponent },
  { path: 'accessorythree', component: AccessoryThreeComponent },

  { path: 'cosmetics', component: CosmeticsComponent },
  { path: 'cosmeticone', component: CosmeticOneComponent },
  { path: 'cosmetictwo', component: CosmeticTwoComponent },
  { path: 'cosmeticthree', component: CosmeticThreeComponent },


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
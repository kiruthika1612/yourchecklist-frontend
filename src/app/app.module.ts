import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AddressComponent } from './address/address.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';
import { PrivatepolicyComponent } from './privatepolicy/privatepolicy.component';
import { ReturnsComponent } from './returns/returns.component';
import { ProductsComponent } from './products/products.component';
import { TrolleysComponent } from './products/trolleys/trolleys.component';
import { TrolleyOneComponent } from './products/trolleys/trolley-one/trolley-one.component';

import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TrolleyTwoComponent } from './products/trolleys/trolley-two/trolley-two.component';
import { TrolleyThreeComponent } from './products/trolleys/trolley-three/trolley-three.component';
import { BagsComponent } from './products/bags/bags.component';
import { BagOneComponent } from './products/bags/bag-one/bag-one.component';
import { BagTwoComponent } from './products/bags/bag-two/bag-two.component';
import { BagThreeComponent } from './products/bags/bag-three/bag-three.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    AddressComponent,
    DashboardComponent,
    TermsandconditionsComponent,
    PrivatepolicyComponent,
    ReturnsComponent,
    ProductsComponent,
    TrolleysComponent,
    TrolleyOneComponent,
    TrolleyTwoComponent,
    TrolleyThreeComponent,
    BagsComponent,
    BagOneComponent,
    BagTwoComponent,
    BagThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule,
    ButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

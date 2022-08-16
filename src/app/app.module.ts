import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { AadharSearchComponent } from './components/aadhar-search/aadhar-search.component';
import { PensionDetailsComponent } from './pension-details/pension-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AadharSearchComponent,
    PensionDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

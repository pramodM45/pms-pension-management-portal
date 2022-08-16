import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AadharSearchComponent } from './components/aadhar-search/aadhar-search.component';
import { LoginComponent } from './components/login/login.component';
import { PensionDetailsComponent } from './pension-details/pension-details.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'search-aadhaar',canActivate:[AuthGuard], component: AadharSearchComponent },
  { path: 'show-details',canActivate:[AuthGuard], component: PensionDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor(private authService: AuthServiceService,private router: Router) { }

  logout(){
    this.authService.deleteToken();
    this.router.navigate(['/login']);
  }
}

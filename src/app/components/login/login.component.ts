import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { HttpServiceService } from 'src/app/services/http-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private username:string = "";
  private password:string = "";

  token:string = "";
  message:string = "";

  wrongCredentials:boolean = false;
  tokenExpired:boolean = false;

  constructor(private httpService:HttpServiceService,
    private router:Router,
    private authService:AuthServiceService) { }

  ngOnInit(): void {
  }

  onLogin(usernameEl:HTMLInputElement,passwordEl:HTMLInputElement):void {
    this.username = usernameEl.value;
    this.password = passwordEl.value;
    this.httpService.sendLoginRequest(this.username,this.password).subscribe(data => {
        this.authService.isLoggedin=true;
        this.authService.setToken(data.token);
        this.router.navigate(['/search-aadhaar']);
    },
    error => {
       this.authService.isLoggedin=false;
       this.wrongCredentials=true;
       console.log(error.status);
       this.router.navigate(['/login']);
    });
  }



}

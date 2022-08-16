import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AuthServiceService } from './auth-service.service';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
 

  private loginApi:string = environment.loadbalancerUri+"/authentication-service/authenticate";
  private aadhaarApi:string = environment.loadbalancerUri+"/process-pension/ProcessPension";

  constructor(private http:HttpClient,private authService:AuthServiceService) { }

  sendLoginRequest(username:string, password:string){
    return this.http.post<{username:string,token:string,message:string}>(this.loginApi,
      {
        userName:username,
        password:password
    });
  }

  getAadhaarDetails(aadhaarNumber: string) {
    const exheaders = new HttpHeaders({
      "Authorization":this.authService.getToken()
    });
    console.log(this.authService.getToken());
    return this.http.post<{
      pensionAmount: string,
      bankServiceCharge: string
    }>(this.aadhaarApi,{
      "aadhaarNumber":aadhaarNumber
  },{
    headers:exheaders
  });
  }



  
}

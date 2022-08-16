import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  isLoggedin: boolean=false;

  token: string="";

  setToken(token: string){
    this.token = token;
  }

  deleteToken(){
    this.token="";
  }

  getToken(){
    return this.token;
  }

  constructor() { }
}

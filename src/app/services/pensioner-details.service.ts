import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PensionerDetailsService {

  pensionDetails:{
    pensionAmount: string,
    bankServiceCharge: string
  } = {
    pensionAmount: '',
    bankServiceCharge: ''
  };


  constructor() { }

  setPensionDetails(pensionDetails1:{
    pensionAmount: string,
    bankServiceCharge: string
  }){
    this.pensionDetails =pensionDetails1;
    console.log(this.pensionDetails);
  }

  getPensionDetails(){
    console.log(this.pensionDetails);
    return this.pensionDetails;
  }
}

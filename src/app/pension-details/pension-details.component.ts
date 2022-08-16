import { Component, OnInit } from '@angular/core';
import { LogoutService } from '../services/logout.service';
import { PensionerDetailsService } from '../services/pensioner-details.service';

@Component({
  selector: 'app-pension-details',
  templateUrl: './pension-details.component.html',
  styleUrls: ['./pension-details.component.css']
})
export class PensionDetailsComponent implements OnInit {

  pensionDetails:{
    pensionAmount: string,
    bankServiceCharge: string
  } = {
    pensionAmount: '',
    bankServiceCharge: ''
  };

  constructor(private pensionerDetailsService:PensionerDetailsService,
    private logoutService:LogoutService){ 
    
  }

  ngOnInit(): void {
    this.pensionDetails = this.pensionerDetailsService.getPensionDetails();
  }

  logout(){
    this.logoutService.logout();
  }

}

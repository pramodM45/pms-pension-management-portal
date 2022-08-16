import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { LogoutService } from 'src/app/services/logout.service';
import { PensionerDetailsService } from 'src/app/services/pensioner-details.service';

@Component({
  selector: 'app-aadhar-search',
  templateUrl: './aadhar-search.component.html',
  styleUrls: ['./aadhar-search.component.css']
})
export class AadharSearchComponent implements OnInit {

  aadhaarNumber: string="";

  noAadhaar: boolean = false;

  constructor(private httpService: HttpServiceService,private router:Router,
    private pensionerDetailsService:PensionerDetailsService,private logoutService: LogoutService) { }

  ngOnInit(): void {
  }

  searchForAadhaar(aadhaarInput:HTMLInputElement) {
    this.aadhaarNumber = aadhaarInput.value;
    this.httpService.getAadhaarDetails(this.aadhaarNumber).subscribe((data) => {
      this.pensionerDetailsService.setPensionDetails(data);
      this.router.navigate(['/show-details'])
    },error=>{
      this.noAadhaar=true;
      this.router.navigate(['/search-aadhaar']);
    }
    );
    
  }

  logout(){
    this.logoutService.logout();
  }

}

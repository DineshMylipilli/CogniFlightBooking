import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import { AuthServiceService } from '../Services/auth-service.service';

@Component({
  selector: 'app-addflight',
  templateUrl: './addflight.component.html',
  styleUrls: ['./addflight.component.css']
})
export class AddflightComponent implements OnInit {

  addFlightForm = new FormGroup({
    AirlineId: new FormControl('',Validators.required),
    Airlinename: new FormControl('',Validators.required),
  });

  constructor(private service:AuthServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  Addflight(data:any){
    this.service.AddFlight(data).subscribe((res:any) => {console.log(res)  
        if(res == 1){
          alert('Airline added successfully');
          this.router.navigate(['./'+localStorage.getItem('role')]);
        }
        else if(res == 0){
          alert('Please enter proper details');
          this.router.navigate(['./addflight']);
        }
      },(error:HttpErrorResponse)=>{
        alert("Please Login to continue");
        this.service.Logout();
      }
    );
  }
  
}

import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../Services/auth-service.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private service:AuthServiceService, public router:Router) { }

  ngOnInit(): void {
  }

  flights:any = [];

  searchForm = new FormGroup({
    Source: new FormControl('',Validators.required),
    Destination: new FormControl('',Validators.required),
    RoundTrip: new FormControl(0,Validators.required)
  });

  SearchFlight(data:any){
    console.log(data);
    this.service.searchFlight(data).subscribe((res:any) => {console.log(res)
        if(res != null){
          this.flights = res;
        }
      },(error:HttpErrorResponse)=>{
        alert("Please Login to continue");
        this.service.Logout();
      }
    );
  }

}

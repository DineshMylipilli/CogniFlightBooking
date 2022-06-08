import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../Services/auth-service.service';

@Component({
  selector: 'app-blockflight',
  templateUrl: './blockflight.component.html',
  styleUrls: ['./blockflight.component.css']
})
export class BlockflightComponent implements OnInit {

  blockFlightForm = new FormGroup({
    AirlineId: new FormControl('',Validators.required),
  });

  constructor(private service:AuthServiceService) { }

  ngOnInit(): void {
  }

  blockFlight(data:any){
    this.service.BlockFlight(data.AirlineId).subscribe((res:any) => { console.log(res);
          if(res==1){
            alert('Airline is blocked successfully');
          }
        },
        (error:HttpErrorResponse)=>{
          alert("Please Login to continue");
          this.service.Logout();
        }
    );
  }
}

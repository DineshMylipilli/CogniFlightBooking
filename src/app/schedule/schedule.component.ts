import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../Services/auth-service.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  constructor(private service:AuthServiceService, public router:Router) { }

  ngOnInit(): void {
  }

  scheduleForm = new FormGroup({
    FlightId: new FormControl('',Validators.required),
    FlightName: new FormControl('',Validators.required),
    Source: new FormControl('',Validators.required),
    Destination: new FormControl('',Validators.required),
    StartTime: new FormControl('',Validators.required),
    EndTime: new FormControl('',Validators.required),
    ScheduledDays: new FormControl('Daily',Validators.required),
    Bcseats: new FormControl(0,Validators.required),
    Nbcseats: new FormControl(0,Validators.required),
    Price: new FormControl(0,Validators.required),
    MealType: new FormControl(0,Validators.required),
    RoundTrip: new FormControl(0,Validators.required)
  });

  Schedule(data:any){
    this.service.AddSchedule(data).subscribe((res:any) => {console.log(res)  
          if(res.success == 1){
            alert(res.message);
            this.router.navigate(['./'+localStorage.getItem('role')]);
          }
          else if(res.success == 0){
            alert(res.message);
            this.router.navigate(['./'+localStorage.getItem('role')]);
          }
        },(error:HttpErrorResponse)=>{
          alert("Please Login to continue");
          this.service.Logout();
        }
      );
  }
}

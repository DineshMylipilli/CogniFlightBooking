import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Router} from '@angular/router';
import { AuthServiceService } from '../Services/auth-service.service';

@Component({
  selector: 'app-bookticket',
  templateUrl: './bookticket.component.html',
  styleUrls: ['./bookticket.component.css']
})
export class BookticketComponent implements OnInit {

  constructor(private service:AuthServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  bookticketForm = new FormGroup({
    AirlineId: new FormControl('',Validators.required),
    //BoardingTime: new FormControl('',Validators.required),
    UserName: new FormControl('',Validators.required),
    EmailId: new FormControl(localStorage.getItem('email'),Validators.required),
    Name: new FormControl('',Validators.required),
    Gender: new FormControl('',Validators.required),
    Age: new FormControl(0,Validators.required),
    //Source: new FormControl('',Validators.required),
    //Destination: new FormControl('',Validators.required),
    MealTpe: new FormControl(0,Validators.required),
    SeatNumbers: new FormControl('',Validators.required)

  });

  BookTicket(data:any){
    // console.log(data);
    this.service.BookTicket(data).subscribe((res:any) => {console.log(res)  
          if(res.success == 1){
            alert(res.message);
            this.router.navigate(['./'+localStorage.getItem('role')]);
          }
          else if(res.success == 0){
            alert(res.message);
          }
        },(error:HttpErrorResponse)=>{
          alert("Please Login to continue");
          this.service.Logout();
        }
      );
  }
}
